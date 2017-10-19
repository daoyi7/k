<template>
<div id="app">
  <!-- <img src="./assets/images/logo.png"> -->
  <v-header></v-header>
  <v-nav></v-nav>
  <transition name="fade">
    <router-view/>
  </transition>
  <v-right></v-right>
  <v-background></v-background>
</div>
</template>

<script type="">
import header from '@/components/Public/header'
import nav from '@/components/Public/nav'
import right from '@/components/Public/right'
import background from '@/components/Public/background'

export default {
  name: 'app',
  components: {
    'v-header': header,
    'v-nav': nav,
    'v-right': right,
    'v-background': background
  }
}
</script>

<style lang="stylus" scoped>

    #app
        position relative
        top 7em
        display block
        width 98.6em
        margin 0 auto
        .fade-enter-active, .fade-leave-active
            transition opacity .5s
        .fade-enter, .fade-leave-to
            opacity 0
</style>
