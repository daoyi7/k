<template>
<div id="app">
  <!-- <img src="./assets/images/logo.png"> -->
  <v-background></v-background>
  <v-header></v-header>
  <main class="main">
    <v-nav></v-nav>
    <v-right></v-right>
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </main>
  <v-footer></v-footer>
  <backtop></backtop>
</div>
</template>

<script type="text/ecmascript-6">
import header from '@/components/Public/header'
import nav from '@/components/Public/nav'
import right from '@/components/Public/right'
import background from '@/components/Public/background'
import backtop from '@/components/Public/backtop'
import footer from '@/components/Public/footer'

export default {
  name: 'app',
  components: {
    'v-header': header,
    'v-nav': nav,
    'v-right': right,
    'v-background': background,
    'backtop': backtop,
    'v-footer': footer
  },
}
</script>

<style lang="stylus" scoped>

    #app
      .main
        width 98.6em
        height 100%
        margin 0 auto
        overflow hidden
        &:after
          display block
          clear both
          height 0
          content  ""
          visibility  hidden
          overflow hidden
      .img_view
        position fixed
        top 0
        left 0
        z-index 99999
        width 100%
        height 100%
        display flex
        justify-content center
        align-items center
        background-color rgba(0, 0, 0, 0.25)
        img
          border 2px solid rgba(238,238,238,0.25)
      .fade-enter-active, .fade-leave-active
        transition all .5s
      .fade-enter, .fade-leave-to
        opacity 0
        width 66.4em
</style>
