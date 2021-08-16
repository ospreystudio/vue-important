<template>
  <div class="content">
    <button @click="addLike">Like</button>
    <button @click="addDislike" style="margin: 1rem">Dislike</button>
    <div>Кол-во лайков <strong> {{ likes }} </strong></div>
    <div>Кол-во Дизлайков <strong> {{ dislikes }} </strong></div>
  </div>
</template>

<script>
export default {
  name: "Arrays",
  data() {
    return {
      likes: 0,
      dislikes: 0,
    }
  },
  methods: {
    addLike() {
      this.likes +=1
    },
    addDislike() {
      this.dislikes -=1

    }
  }
}
</script>

<style scoped>
.content {
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>