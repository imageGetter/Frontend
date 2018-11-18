<template>
  <div align="center">
    <rotate-square2 v-if="isLoading"
      style="height:10vh; width: 10vh; position: fixed; top: 50vh; left: 50vw; transform: translate(-50%, -50%);"/>
  </div>
</template>

<script>
  import {RotateSquare2} from 'vue-loading-spinner'
  import {mapGetters} from 'vuex'

  export default {
    name: "LoadingSpin",
    components: {
      RotateSquare2
    },
    computed:
      mapGetters({
        isLoading: 'isLoading'
      }),
  }
</script>

<style lang="scss" scoped>
  .spinner::after {
    background: #ff8b88 !important;
  }
</style>
