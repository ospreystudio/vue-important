<template>
  <div class="app">
    <h1>Создание поста</h1>
    <form @submit.prevent>
      <my-input v-focus  type="text" placeholder="Название" :value="post.title" @input="post.title = $event.target.value" />
      <my-input  type="text" placeholder="Описание" v-model="post.body" />
      <my-button class="btn" @click="createPost">Создать</my-button>
    </form>
  </div>
</template>

<script>
import MyButton from "../UI/MyButton";
import MyInput from "../UI/MyInput";
export default {
  name: "PostForm",
  components: {MyInput, MyButton},
  data() {
    return {
      post: {
        title: "",
        body: "",
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: "",
        body: "",
      }
    }
  }
}
</script>

<style scoped>

.app {
  padding: 20px
}


form {
  display: flex;
  flex-direction:column;
}



</style>