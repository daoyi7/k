<template>
<div class="notice">
  <div class="icon">
    <i class="icon iconfont icon-notice"></i>
  </div>
  <swiper class="slide-wrap" :options="swiperOption">
    <swiper-slide class="slide-item" v-for="(notice,index) in notices" key="index">
      <router-link class="slide-link" to="/">
        <span class="slide-title">{{ notice.title }}</span>
      </router-link>
    </swiper-slide>
  </swiper>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'carrousel',
  data() {
    return {
      swiperOption: {
        autoplay: 3500,
        setWrapperSize: true,
        direction: 'vertical',
        autoplayDisableOnInteraction: false,
      },
      notices: [{
          title: "bg1",
        },
        {
          title: "bg2",
        },
      ]
    }
  },
}
</script>


<style lang="stylus" scoped>

    height = 3em

    .notice
        width: 100%
        height: height
        display: flex
        background-color: #fff
        line-height: height
        .icon
            flex: 0 0 3.2em
            width: 3.2em
            height: 100%
            text-align: center
            vertical-align: middle
            i.icon
                font-size: 1.3em
        .slide-wrap
            flex: 1
            .slide-item
                .slide-link
                    color: #00030d
                    font-size: 1.4em

</style>
