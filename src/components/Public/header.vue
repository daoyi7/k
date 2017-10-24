<template>
    <header class="header">
        <div class="header-wrap">
            <nav class="header-nav">
                <router-link class="header-link" to="/">kawhi.me</router-link>
                <span class="motto">" I Can do all things "</span>
            </nav>
        </div>
    </header>
</template>

<script type="text/ecmascript-6">
    export default {
    }
</script>

<style lang="stylus" scoped>

    height = 5em

    .header
      width 100%
      height height
      padding-bottom 2em
      .header-wrap
        position fixed
        top 0
        left 0
        z-index: 9999
        width 100%
        height height
        line-height height
        background-color rgba(183, 191, 197, 0.6)
        color #00030d
        .header-nav
          width 98.6em
          margin 0 auto
          height height
          line-height height
          .header-link
            display inline-block
            width auto
            height 100%
            color #00030d
            font-size 3em
          .motto
            margin-left 4.3em

</style>
