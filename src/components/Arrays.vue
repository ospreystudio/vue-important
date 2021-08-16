<template>
  <div class="post" v-for="post in posts">
    <div><strong>Название: </strong>  {{post.title}} </div>
    <div><strong>Описание: </strong>  {{post.body}} </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      posts: [
        {id: 1, title: 'JavaScript', body: 'Описание поста'},
        {id: 2, title: 'JavaScript 2', body: 'Описание поста 2 '},
        {id: 3, title: 'JavaScript 3', body: 'Описание поста 3 '},
        {id: 4, title: 'JavaScript 4', body: 'Описание поста 4 '},
      ]
    }
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid cornflowerblue;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}


</style>