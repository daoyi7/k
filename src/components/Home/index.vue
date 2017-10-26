<template>
<div class="content">
  <v-slide :slides="slides"></v-slide>
  <v-notice></v-notice>
  <v-blog :blogs="blogs"></v-blog>
</div>
</template>

<script type="text/ecmascript-6">
import slide from '@/components/Home/slide'
import notice from '@/components/Home/notice'
import blog from '@/components/Home/blog'

export default {
  name: 'index',
  data() {
    return {
      posts: []
    }
  },
  components: {
    'v-slide': slide,
    'v-notice': notice,
    'v-blog': blog,
  },
  created() {
    this.$http({
        method: 'get',
        url: 'http://localhost/wordpress/api/core/get_posts/?count=9999999999',
      }).then((res) => {
        this.posts = res.data.posts
      })
      .catch(function(error) {
        console.error(error);
      })
  },
  computed: {
    blogs() {
      return this.posts
    },
    slides() {
      return this.posts.slice(0, 5)
    }
  }
}
</script>

<style lang="stylus" scoped>
    .content
        float left
        width 66.4em
        margin 0 0 0 13em
        overflow hidden
</style>
