<template>
<swiper class="slide-wrap" :options="swiperOption">
  <swiper-slide class="slide-item" v-for="(slide,index) in slides" key="index">
    <router-link class="slide-link" to="/">
      <span class="slide-title">{{ slide.title }}</span>
      <img class="slide-thumb" :src="slide.thumbnail_images?slide.thumbnail_images.full.url:defaultImgUrl">
    </router-link>
  </swiper-slide>
  <div class="swiper-pagination" slot="pagination"></div>
</swiper>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'carrousel',
  props: {
    slides: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      defaultImgUrl: '../static/images/logo.png',
      swiperOption: {
        autoplay: 3500,
        setWrapperSize: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: false,
        observeParents: true,
        autoplayDisableOnInteraction: false,
      }
    }
  },
}
</script>

<style lang="stylus" scoped>
@import "../../common/mixin";

    .slide-wrap
      margin-bottom 1em
      .slide-item
        width 100%
        height 25em
        position relative
        overflow hidden
        .slide-link
          span.slide-title
            position absolute
            right 1.7em
            top 1.2em
            z-index 2
            padding .4em .7em
            display block
            background rgba(183, 191, 197, 0.25)
            color #fff
            font-size 1.4em
          img.slide-thumb
            position absolute
            top -6.5em
            width 100%
            transform rotate(0) scale(1)
            trans(transform, 1s)
            &:hover
              transform rotate(2deg) scale(1.1)
      .pagination
        position absolue
        text-align center
        transition 300ms
        transform translate3d(0, 0, 0)
        z-index 10

</style>
