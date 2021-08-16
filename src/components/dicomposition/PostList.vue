<template>
  <div v-if="posts.length > 0">
  <h1>Список пользователей</h1>
  <post-item
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"></post-item>
  </div>
    <h2 style="color: red" v-else> Список пуст!</h2>
</template>

<script>


import PostItem from "./PostItem";
export default {
  name: "PostList",
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>