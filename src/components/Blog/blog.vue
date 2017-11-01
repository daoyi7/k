<template>
<div class="blog">
  <div class="head">
    <p class="head-icon"><i class="icon iconfont icon-read"></i></p>
    <p class="slogan" v-text="slogan"></p>
  </div>
  <div class="module" v-for="(blog, index) in blogs" key="index">
    <div class="thumb">
      <router-link :to="{ name: 'detail',params: { id: blog.id}}">
        <img :src="blog.thumbnail_images?blog.thumbnail_images.full.url:defaultImgUrl">
      </router-link>
    </div>
    <div class="main">
      <h4 class="title">
        <router-link :to="{ name: 'detail',params: { id: blog.id}}">{{ blog.title }}</router-link>
      </h4>
      <p class="info" v-if="blog.excerpt" v-html="blog.excerpt">{{ blog.excerpt }}</p>
      <div class="list">
        <p class="list-icon time">
          <i class="icon iconfont icon-updatetime"></i>
          <span>{{ blog.modified | moment }}</span>
        </p>
        <p class="list-icon view" v-if="blog.custom_fields.views">
          <i class="icon iconfont icon-view"></i>
          <span>{{ blog.custom_fields.views | views }}</span>
        </p>
        <p class="list-icon comments">
          <i class="icon iconfont icon-comments"></i>
          <span>{{ blog.comment_count }}</span>
        </p>
        <p class="list-icon like">
          <i class="icon iconfont icon-like"></i>
          <span>1</span>
        </p>
        <p class="list-icon tag">
          <i class="icon iconfont icon-tag"></i>
          <span>{{ blog.categories[0].slug }}</span>
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'

export default {
  data() {
    return {
      defaultImgUrl: '../static/images/logo.png',
      slogan: "",
      blogs: {}
    }
  },
  created() {
    this.$http({
        method: 'get',
        url: '/core/get_category_posts/?category_slug=blog&?count=9999999999',
      }).then((res) => {
        this.blogs = res.data.posts
      })
      .catch(function(error) {
        console.error(error)
      })
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let str = "The true test of a man's character is what he does when no one is watching.",
        _this = this,
        timer = null;

      function typing() {
        let i = -1,

          timer = setInterval(() => {
            i = i + 1

            _this.slogan = _this.slogan + str[i]

            if (i > str.length - 2) {
              clearInterval(timer)
              setTimeout(deleting, 2000)
            }
          }, 100)
      }

      function deleting() {
        let wstr = str.split(""),
            j = wstr.length;

        timer = setInterval(function() {
          j = j - 1
          wstr = wstr.slice(0, j)
          _this.slogan = wstr.join("")

          if (j <= 0) {
            clearInterval(timer)
            setTimeout(typing, 200)
          }
        }, 100)

      }

      typing()
    },
  },
  filters: {
    moment: function(value) {
      return Vue.prototype.$moment(value).fromNow()
    },
    views: function(value) {
      return value.toString()
    }
  }
}
</script>

<style lang="stylus" scoped>

  trans = .5s linear

  @keyframes blink
    from
      opacity 1
    to
      opacity 0

  .blog
    float left
    width 66.4em
    margin 0 0 0 13em
    position relative
    overflow hidden
    .head
      position relative
      width 100%
      height 25em
      // background rgba(236, 238, 239, 0.7)
      background-color #fff
      overflow hidden
      display flex
      align-items center
      margin-bottom 1em
      .head-icon
        width 100%
        height auto
        display flex
        justify-content center
        i
          font-size 15em
      .slogan
        position absolute
        left 0
        bottom .4em
        width 100%
        height auto
        text-align center
        font-size 1.7em
        padding .4em 0 1em
      .slogan::after
        content ""
        background-color #00030d
        width .06em
        height 1em
        vertical-align -.2em
        margin-left .2em
        display inline-block
        animation blink .4s infinite alternate
        -webkit-animation blink .4s infinite alternate
    .module
      position relative
      width 100%
      // background rgba(236, 238, 239, 0.7)
      background-color #fff
      padding .4em 0em
      margin-bottom 1em
      display flex
      transition background trans
      -moz-transition background trans
      -webkit-transition background trans
      -o-transition background trans
      &:hover
        background rgba(255, 255, 255, 0.7)
        .thumb
          a
            img
              transform translateX(-1em)
      .thumb
        flex 0 0 17em
        width 17em
        height 11em
        margin-right 1em
        padding-left 0.5em
        a
          position relative
          width 100%
          height 100%
          display block
          overflow hidden
          img
            position absolute
            top -1em
            left -.5em
            min-width 100%
            max-width calc(100% + 1.5em)
            width calc(100% + 1.5em)
            min-height 13em
            height auto
            transform translateX(0)
            transition transform trans
            -moz-transition transform trans
            -webkit-transition transform trans
            -o-transition transform trans
      .main
        flex 1
        padding-right 1.6em
        .title:hover
          transform translateX(.7em)
          a::before
            width 100%
        .title
          line-height 2em
          padding-bottom .5em
          font-weight 700
          transform translateX(0)
          transition transform trans
          -moz-transition transform trans
          -webkit-transition transform trans
          -o-transition transform trans
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
            -moz-transition width trans
            -webkit-transition width trans
            -o-transition width trans
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
          .list-icon.like
            cursor pointer
          .list-icon.tag
            i
              font-weight 700
</style>
