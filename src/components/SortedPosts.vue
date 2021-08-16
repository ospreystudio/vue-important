<template>
  <div class="app">
    <h1>Страница с постами</h1>

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

    <post-list :posts="sortedPost" @remove="removePost" v-if="!isPostsLoading"></post-list>
    <div v-else>Идёт загрузка... </div>
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
    async fetchPosts() {
      try {
        this.isPostsLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = response.data;
      } catch (e) {
        alert('Ошибка')
      } finally {
        this.isPostsLoading = false
      }
    }
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    sortedPost() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
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


</style>