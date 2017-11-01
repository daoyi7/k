<template>
<div class="search">
  <div class="head">
    <p class="head-icon"><i class="icon iconfont icon-search"></i></p>
    <p class="slogan">这是所有关于 "{{ this.search }}" 的文章</p>
  </div>
  <div class="module" v-for="(srch, index) in searches" key="index">
    <div class="thumb">
      <router-link :to="{ name: 'detail',params: { id: srch.id}}">
        <img :src="srch.thumbnail_images?srch.thumbnail_images.full.url:defaultImgUrl">
      </router-link>
    </div>
    <div class="main">
      <h4 class="title">
        <router-link :to="{ name: 'detail',params: { id: srch.id}}">{{ srch.title }}</router-link>
      </h4>
      <p class="info" v-if="srch.excerpt" v-html="srch.excerpt">{{ srch.excerpt }}</p>
      <div class="list">
        <p class="list-icon time">
          <i class="icon iconfont icon-updatetime"></i>
          <span>{{ srch.modified | moment }}</span>
        </p>
        <p class="list-icon view" v-if="srch.custom_fields.views">
          <i class="icon iconfont icon-view"></i>
          <span>{{ srch.custom_fields.views | views }}</span>
        </p>
        <p class="list-icon comments">
          <i class="icon iconfont icon-comments"></i>
          <span>{{ srch.comment_count }}</span>
        </p>
        <p class="list-icon like">
          <i class="icon iconfont icon-like"></i>
          <span>1</span>
        </p>
        <p class="list-icon tag">
          <i class="icon iconfont icon-tag"></i>
          <span>{{ srch.id }}</span>
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
      searches: {},
      search: this.$route.params.search,
    }
  },
  methods: {
    getData(result) {
      this.$http({
          method: 'get',
          url: '/core/get_search_results/?search='+result,
        }).then((res) => {
          this.searches = res.data.posts
        })
        .catch(function(error) {
          console.error(error)
        })
    },
    searchShow() {
      if(this.searches.length == 0) {
        return false
      }
    }
  },
  mounted() {
    this.getData(this.search)
  },
  filters: {
    moment: function(value) {
      return Vue.prototype.$moment(value).fromNow()
    },
    views: function(value) {
      return value.toString()
    }
  },
  watch: {
    '$route'(to,from){
      if((from !== to)&&(to.name==='search')) {
        this.search = this.$route.params.search
        this.getData(this.search)
      }
    }
  },
}
</script>

<style lang="stylus" scoped>

trans = .5s linear

@keyframes rotate
  0%
    transform rotateY(0)
  // 25%
  //   transform rotateY(45deg)
  50%
    transform rotateY(90deg)
  // 75%
  //   transform rotateY(135deg)
  100%
    transform rotateY(180deg)

.search
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
        font-size 12em
        color #b7bfc5
        animation rotate 3s linear infinite alternate
    .slogan
      position absolute
      left 0
      bottom .4em
      width 100%
      height auto
      text-align center
      font-size 1.7em
      padding .4em 0 1em
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
