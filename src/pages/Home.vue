<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-input
        v-model="searchQuery"
        placeholder="Поиск..."
    />

<div class="app_btns">
  <my-button @click="showDialog">Создать пользователя</my-button>
  <my-select
  v-model="selectedSort"
  :options="sortOptions"
  />
</div>



  <my-dialog v-model:show="dialogVisible">
    <post-form @create="createPost"></post-form>
  </my-dialog>

  <post-list :posts="sortedAndSearchedPost" @remove="removePost" v-if="!isPostsLoading"></post-list>
    <div v-else>Идёт загрузка... </div>
    <div v-intersection="loadMorePosts" ref="observer"></div>

<!--    <div class="page_wrapper">-->
<!--      <div v-for="pageNumber in totalPages"-->
<!--            :key="pageNumber"-->
<!--            class="page"-->
<!--            :class="{'current-page' : page === pageNumber}"-->
<!--            @click="changePage(pageNumber)"-->
<!--            > {{ pageNumber }}-->

<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>

import axios from "axios"
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
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      searchQuery:'',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        {
          value: 'title', name: 'По названию'
        },
        {
          value: 'body', name: 'По содержимому'
        }
      ]

    }
  },

  methods: {
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
    // changePage(pageNumber) {
    //   this.page = pageNumber
    //   this.fetchPosts()
    // },
    async fetchPosts() {
      try {
        this.isPostsLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit
            }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data;
      } catch (e) {
        alert('Ошибка')
     } finally {
        this.isPostsLoading = false
      }
    },
    async loadMorePosts() {
      try {
        this.page +=1;

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert('Ошибка')
      }
    },
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    sortedPost() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPost() {
      return this.sortedPost.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
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