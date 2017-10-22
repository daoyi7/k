<template>
<div class="content">
  <v-slide :slides="blog"></v-slide>
  <v-notice></v-notice>
  <v-blog :blogs="blog"></v-blog>
  <backtop></backtop>
</div>
</template>

<script type="text/ecmascript-6">
import slide from '@/components/Home/slide'
import notice from '@/components/Home/notice'
import blog from '@/components/Home/blog'
import backtop from '@/components/Public/backtop'

export default {
  name: 'index',
  data() {
    return {
      blog: ''
    }
  },
  components: {
    'v-slide': slide,
    'v-notice': notice,
    'v-blog': blog,
    'backtop': backtop
  },
  created() {
    this.$http({
        method: 'get',
        url: 'http://47.94.89.18/api/core/get_posts/',
      }).then((res) => {
        this.blog = res.data.posts

        console.log(this.blog)
      })
      .catch(function(error) {
        console.error(error);
      })
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
