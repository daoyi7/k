<template>
<nav class="nav">
  <div class="nav-wrap">
    <div class="nav-item" v-for="(nav,index) in navs" key="index">
      <router-link class="nav-link" :to="nav.url">
        <i :class="nav.icon"></i>
        <span class="nav-text">{{ nav.name }}</span>
      </router-link>
    </div>
  </div>
</nav>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      navs: [{
          url: "/Home",
          icon: "icon iconfont icon-home",
          name: "HOME"
        },
        {
          url: "/blog",
          icon: "icon iconfont icon-blog",
          name: "BLOG"
        },
        {
          url: "/project",
          icon: "icon iconfont icon-project",
          name: "PROJECT"
        },
        {
          url: "/think",
          icon: "icon iconfont icon-think",
          name: "THINK"
        },
        {
          url: "about",
          icon: "icon iconfont icon-me",
          name: "ABOUT"
        },
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

    .nav
      position: fixed
      top: 7em
      width: 11.7em
      .nav-wrap
        width: 100%
        height: auto
        background-color: rgba(183, 191, 197, 0.6)
        position: absolute
        top: 0
        left: 0
        .nav-item
          line-height: 3.3em
          .nav-link
            font-size: 1em
            color: #fff
            display: block
            padding: 0 0 0 1.3em
            transition: color .15s linear
            &:hover
              color: #00030d
            &.active
              color: #00030d
            .icon
              font-size: 1.4em
              vertical-align: middle
            .nav-text
              font-size: 1.4em
              margin-left: 0.4em
              vertical-align: middle
            .nav-link:hover
              color: #00030d
              font-weight: 700

</style>
