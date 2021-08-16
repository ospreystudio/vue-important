<template>
  <div class="content">
    <my-button @click="addLike">Like</my-button>
    <my-button @click="addDislike" style="margin: 1rem">Dislike</my-button>
    <div>Кол-во лайков <strong> {{ likes }} </strong></div>
    <div>Кол-во Дизлайков <strong> {{ dislikes }} </strong></div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton";
export default {
  name: "Arrays",
  components: {MyButton},
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