<template>
  <div class="search">
    {{ this.search }}
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      search: this.$route.params.search,
    }
  }
}
</script>

<style lang="stylus" scoped>

  .search
    float left
    position relative
    overflow hidden
    width 61.4em
    margin 0 0 8em 13em
    background rgba(236, 238, 239, 0.7)
    padding .4em 2.5em
</style>
