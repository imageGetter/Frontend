<template>
  <div>
    <div style="height: 30px;"></div>

    <img v-for="src in imageList" :src="src" :key="src">

  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: "Images",
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

<style scoped>

</style>
