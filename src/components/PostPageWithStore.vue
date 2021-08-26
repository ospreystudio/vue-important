<template>

  <div class="app">
    <h1>Страница с постами</h1>
    <my-input
        v-focus
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        placeholder="Поиск..."
    />

    <div class="app_btns">
      <my-button @click="showDialog">Создать пользователя</my-button>
      <my-select
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
          :options="sortOptions"
      />
    </div>



    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"></post-form>
    </my-dialog>

    <post-list :posts="sortedAndSearchedPost" @remove="removePost" v-if="!isPostsLoading"></post-list>
    <div v-else>Идёт загрузка... </div>
    <div v-intersection="loadMorePosts" ref="observer"></div>

    <div class="page_wrapper">
      <div v-for="pageNumber in totalPages"
           :key="pageNumber"
           class="page"
           :class="{'current-page' : page === pageNumber}"
           @click="changePage(pageNumber)"
      > {{ pageNumber }}

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'
import PostList from "../components/dicomposition/PostList";
import PostForm from "../components/dicomposition/PostForm";
export default {
  components: {
    PostForm,
    PostList
  },
  name: "Home",
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters(({
      sortedPost: 'post/sortedPost',
      sortedAndSearchedPost: 'post/sortedAndSearchedPost'
    }))
  },
  // сортировка с помощью оюъека watch
  // watch: {
  //   selectedSort(newValue){
  //       this.posts.sort((post1, post2) => {
  //         return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
  //       })
  //   }
  // }
}
</script>

<style scoped>
.app_btns {
  display: flex;
  justify-content: space-between;
}
.page_wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid lightblue;
  padding: 10px;
  margin-right: 5px;
  cursor: pointer;
}
.current-page {
  border: 2px solid #0074D9;
}
.observer {
  height: 30px;
  background: #0074D9;
}
</style>