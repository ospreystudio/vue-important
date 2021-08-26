<template>

  <div id="page">
    <nav>
      <router-link to="/">vue-3</router-link>
      <router-link to="/func">Функции</router-link>
      <router-link to="/array">Массивы</router-link>
      <router-link to="/prem">PropsEmit</router-link>
      <router-link to="/server">Server</router-link>
      <router-link to="/sorting">сортировка</router-link>
      <router-link to="/search">поиск</router-link>
      <router-link to="/search">пагинация</router-link>
      <router-link to="/autopost">автопост</router-link>
      <router-link to="/store">store</router-link>
      <router-link to="/composition">CompositionAPI</router-link>

    </nav>

    <div id="content">



    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style lang="scss" scoped>
// Vairables
$bg: #0074D9 ; // Background
$c: #111111; // Color
$h-bg: #FFFFFF; // Hover Background
$h-c: #111111; // Hover Color

// Navbar Style

   nav {
     display: block;
     background: $bg;
     padding: 0 5%;
@media (max-width:700px) {
  padding: 0;
}
a {
  display: inline-block;
  color: $c;
  transition: 1s all;
  padding: 1em 2%;
text: {
  decoration: none;
  transform: lowercase;
}
font: {
  size: 1.5em;
  family: sans-serif;
  weight: 100;
}
@media (max-width:700px) {
  display: block;
}
&:hover {
   background: $h-bg;
   color: $h-c;
 }
}
}

// NOT NAVBAR
   h1 {
     text-align: center;
     margin: 2em 0;
   }

</style>