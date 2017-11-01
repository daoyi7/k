<template>
<div class="backTop">
  <div class="rico twitter">
    <a href="http://47.94.89.18/feed/" target="_blank" class="icon iconfont icon-rss"></a>
  </div>
  <div class="rico qq">
    <i class="icon iconfont icon-qq"></i>
  </div>
  <div class="rico wechat">
    <i class="icon iconfont icon-wechat"></i>
  </div>
  <div class="rico weibo">
    <a href="http://weibo.com/daoyi369 " target="_blank" class="icon iconfont icon-weibo"></a>
  </div>
  <div class="rico twitter">
    <a href="https://twitter.com/WellCoding" target="_blank" class="icon iconfont icon-twitter"></a>
  </div>
  <div class="rico github">
    <a href="https://github.com/daoyi7" target="_blank" class="icon iconfont icon-github"></a>
  </div>
  <transition name="fade">
    <div class="rico rollback" v-show="visible" @click="topClick">
      <i class="icon iconfont icon-top"></i>
    </div>
  </transition>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      visible: false
    }
  },
  props: {
    visibleOffset: {
      type: [String, Number],
      default: 400
    }
  },
  created() {
    let catchScroll = () => {
      this.visible = (window.pageYOffset > parseInt(this.visibleOffset))
    }
    window.smoothscroll = () => {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll)
        window.scrollTo(0, currentScroll - (currentScroll / 5))
      }
    }
    window.onscroll = catchScroll
  },
  methods: {
    topClick() {
      window.smoothscroll()
    }
  }
}
</script>

<style lang="stylus" scoped>

    @keyframes iconmove
      0%
        transform translateY(.15em)
      50%
        transform translateY(-.15em)
      100%
        transform translateY(.15em)

    @-webkit-keyframes iconmove
      0%
        transform translateY(.15em)
      50%
        transform translateY(-.15em)
      100%
        transform translateY(.15em)

    .backTop
      position fixed
      bottom 5em
      right 2em
      width 3em
      height auto
      background #fff
      .fade-enter-active, .fade-leave-active
        transition opacity .25s linear
      .fade-enter, .fade-leave-to
        opacity 0
      .rico
        position relative
        width 100%
        height 3em
        text-align center
        line-height 3em
        border-bottom 1px solid #eee
        .icon
          color #8e8e8e
          cursor pointer
          display inline-block
          transform translateY(0)
          transition all .2s linear
          &.icon-rss
            color #6b6b6b
            font-weight 700
          &.icon-top
            font-size 2em
            color #6b6b6b
          &.icon-rss:hover
            color #f78422
          &.icon-qq:hover
            color #0086f1
          &.icon-wechat:hover
            color #2ba245
          &.icon-weibo:hover
            color rgb(236, 54, 61)
          &.icon-twitter:hover
            color #1da1f2
          &.icon-github:hover
            color #00030d
          &.icon-top:hover
            animation iconmove 1s infinite

</style>
