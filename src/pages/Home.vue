<template>
  <div class="app">
  <post-form @create="createPost"></post-form>
  <post-list :posts="posts"></post-list>
  </div>
</template>

<script>

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
      posts: [
        {id: 1, title: 'JavaScript', body: 'Описание поста'},
        {id: 2, title: 'JavaScript 2', body: 'Описание поста 2 '},
        {id: 3, title: 'JavaScript 3', body: 'Описание поста 3 '},
        {id: 4, title: 'JavaScript 4', body: 'Описание поста 4 '},
      ],
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
  }
}
</script>

<style scoped>




</style>