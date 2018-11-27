<!--https://codepen.io/mihaeltomic/pen/vmwMdm-->

<template>
  <div style="width: 100vw; margin: 0 auto;">
    <div class="search__container">
      <input class="search__input" type="text" v-model="searchUrl" placeholder="URL 입력 후 엔터!" @keyup.enter="search()"/>
      <button @click="search()" class="searchIcon"/>
    </div>

    <!--
        <div class="credits__container">
          <p class="credits__text">저작권 책임안짐~</p>
        </div>
    -->
    <!--        <a href="https://www.pantone.com/color-of-the-year-2016" class="credits__link">Rose Quartz</a>-->
  </div>
</template>

<script>
  import Const from '../Constant'
  import {mapGetters} from 'vuex';

  export default {
    name: "search",
    computed:
      mapGetters({
        imageList: 'imageList'
      }),
    data() {
      return {
        searchUrl: ''
      }
    },
    methods: {
      search() {
        this.$store.dispatch(Const.GET_IMAGES, this.searchUrl);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,700,900');

  .search {
    &__container {
      position: relative;
      left: 50vw;
      top: 0;
      transform: translateX(-50%);
      width: 60%;
      padding-top: 0px;
    }

    &__input {
      width: 80%;
      padding: 12px 5px;
      background-color: transparent;
      transition: transform 250ms ease-in-out;
      font-size: 14px;
      line-height: 18px;

      color: #575756;
      border-radius: 50px;
      border: 1px solid #575756;
      transition: all 250ms ease-in-out;
      backface-visibility: hidden;
      transform-style: preserve-3d;

      &::placeholder {
        color: color(#575756 a(0.8));
        text-transform: uppercase;
        letter-spacing: 1.5px;
      }

      &:hover,
      &:focus {
        outline: 0;
        border: 1px solid transparent;
        border-bottom: 1px solid #575756;
        border-radius: 0;
        background-position: 100% center;
      }
    }
  }

  .credits {
    &__container {
      margin-top: 24px;
    }

    &__text {
      text-align: center;
      font-size: 13px;
      line-height: 18px;
    }

    &__link {
      color: #ff8b88;
      text-decoration: none;
      transition: color 250ms ease-in;

    }
  }

  .searchIcon {
    width: 18px;
    height: 18px;

    border: 0px;
    color: #575756;
    background-image: url(http://mihaeltomic.com/codepen/input-search/ic_search_black_24px.svg);
    background-color: transparent;
    background-size: 18px 18px;
    transform: translate(-200%,10%);

    &:hover,
    &:focus {
      cursor: pointer;
      outline: none;
    }
  }
</style>
