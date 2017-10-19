<template>
<div class="content">
  <v-slide></v-slide>
  <v-notice></v-notice>
  <!-- <blog></blog> -->
</div>
</template>

<script type="text/ecmascript-6">
import slide from '@/components/Home/slide'
import notice from '@/components/Home/notice'
// import blog from './Home/Content/blog'
export default {
  components: {
    'v-slide': slide,
    'v-notice': notice
  }
}
</script>

<style lang="stylus" scoped>
    .content
        float left
        width 66.4em
        margin 0 0 0 13em
        position relative
        overflow hidden
</style>
