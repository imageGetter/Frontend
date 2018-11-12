<template>
  <div class="hello">
    <main-title/>
    <search/>
    <images/>
  </div>
</template>

<script>
import Search from "./Search";
import Images from "./Images";
import MainTitle from "./MainTitle";
export default {
  name: 'ImageGetter',
  components: {MainTitle, Images, Search}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
