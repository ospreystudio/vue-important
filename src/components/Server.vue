<template>
  <div class="app">
    <h1>Страница с постами</h1>

    <my-button @click="fetchPosts">Получить посты</my-button>

    <my-button @click="showDialog">Создать пользователя</my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"></post-form>
    </my-dialog>

    <post-list :posts="posts" @remove="removePost" v-if="!isPostsLoading"></post-list>
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
  }
}
</script>

<style scoped>




</style>