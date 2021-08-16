<template>
<div>
    <Navbar />
    <router-view/>
</div>

</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar
  }
}

</script>

<style>

* {
margin: 0;
padding: 8px;
box-sizing: border-box;
}
</style>
