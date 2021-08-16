<template>
  <div>
  <h1>Список пользователей</h1>
  <post-item
      v-for="post in posts"
      :post="post"></post-item>
  </div>
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