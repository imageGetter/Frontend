<template>
  <div>
    <div style="height: 30px;"></div>
    <loading-spin/>
    <img class="image imageResizing" align=center v-for="src in imageList" :src="src" :key="src"/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import LoadingSpin from "./LoadingSpin";

  export default {
    name: "Images",
    components: {LoadingSpin},
    computed:
      mapGetters({
        imageList: 'imageList'
      }),
    methods: {
      /* TODO :: 클릭시 다운로드. (cors 해결해야 쓸 수 있음.)
        import axios from 'axios';
        import download from 'downloadjs';

      download_img(url) {
        axios.get(url, {responseType: "blob", crossdomain: true})
          .then(response => {

            var reader = new window.FileReader();
            reader.readAsDataURL(response.data);
            reader.onload = function () {

              var imageData = reader.result;

              var fileName = url
                .split("/").pop()
                .split("?").reverse().pop()
                .split(".").reverse().pop()

              download(imageData, fileName, "image");
            }
          });*/
    }
  }
</script>

<style lang="scss" scoped>
  .image {
    margin: 3px;
  }

  .imageResizing {
    max-width: 20vw;
    max-height: 30vh;
    width: auto;
    height: auto;
  }
</style>
