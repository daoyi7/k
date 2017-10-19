<template>
<div class="blog-wrap">
  <div class="blog-item">
    <div class="blog-module" v-for="(blog, index) in blogs" key="index">
      <div class="thumb">
        <router-link to="/">
          <!-- <img :src="blog.thumb"> -->
          <img src="" alt="">
        </router-link>
      </div>
      <div class="main">
        <h4 class="title">
          <router-link to="/detail">{{ blog.title_plain }}</router-link>
        </h4>
        <p class="info">{{ blog.excerpt }}</p>
        <div class="list">
          <p class="list-icon time">
            <i class="icon iconfont icon-clock2"></i>
            <span>{{ blog.modified | tranTime }}</span>
            <span>1</span>
          </p>
          <p class="list-icon view">
            <i class="icon iconfont icon-view"></i>
            <span>1</span>
          </p>
          <p class="list-icon comments">
            <i class="icon iconfont icon-iconcomments"></i>
            <span>1</span>
          </p>
          <p class="list-icon like">
            <i class="icon iconfont icon-like1"></i>
            <span>1</span>
          </p>
          <p class="list-icon tag">
            <i class="icon iconfont icon-tag"></i>
            <span>think</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'

export default {
  name: 'blog',
  props: {
    blogs: ''
  },
  // data() {
  //   return {
  //     blogs: {}
  //   }
  // },
  filters: {
    tranTime: function(value) {
      value = Vue.prototype.$moment(value).fromNow()

      return value
    }
  },
  // created() {
  //   this.$moment() = this.$moment()
  // }
}
</script>

<style lang="stylus" scoped>

  trans = .5s linear

  .blog-wrap
    width 100%
    height auto
    overflow hidden
    margin-top 1em
    .blog-item
      width 100%
      .blog-modulehover
        background rgba(255, 255, 255, 0.6)
        .thumb
          a
            img
              transform translateX(-1em)
      .blog-module
        position relative
        width 100%
        background #fff
        padding .4em 0em
        margin-bottom 1em
        display flex
        transition background trans
        .thumb
          flex 0 0 17em
          width 17em
          height 11em
          margin-right 1em
          padding-left 0.5em
          a
            width 100%
            height 100%
            display block
            overflow hidden
            img
              min-width 100%
              max-width calc(100% + 1.5em)
              width calc(100% + 1.5em)
              min-height 13em
              height auto
              transform translateX(0)
              transition transform trans
        .main
          flex 1
          padding-right 1.6em
          .titlehover
            transform translateX(.7em)
            a::before
              width 100%
          .title
            line-height 2em
            padding-bottom .5em
            font-weight 700
            transform translateX(0)
            transition transform trans
            a
              position relative
              font-size 1.4em
              color #00030d
            a::before
              content ""
              position absolute
              top 1.3em
              width 0
              height 1px
              background #00030d
              transition width trans
          .info
            height 5em
            font-size 1.3em
            line-height 1.8em
            color #1d1d1d
          .list
            display flex
            line-height 1.4em
            padding-top .2em
            font-size 1.2em
            .list-icon
              flex 1
              i
                vertical-align middle
                margin-right .2em
                font-size 1.2em
              span
                vertical-align middle
              &.time
                flex 0 0 10em
                width 10em
              &.like
                cursor pointer
              &.tag
                i
                    font-weight 700

</style>
