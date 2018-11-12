<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
import Search from "./components/Search";
import Images from "./components/Images";
export default {
  name: 'App',
  components: {Images, Search}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
