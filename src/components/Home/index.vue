<template>
<div class="content">
  <v-slide :slides="slides"></v-slide>
  <v-notice></v-notice>
  <v-content :blogs="blogs"></v-content>
</div>
</template>

<script type="text/ecmascript-6">
import slide from '@/components/Home/slide'
import notice from '@/components/Home/notice'
import content from '@/components/Home/content'

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
    'v-content': content,
  },
  created() {
    this.$http({
        method: 'get',
        url: '/core/get_posts/?count=9999999999',
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
      let slidesArr = []
      for(let i=0;i<this.posts.length;i++) {
        if(this.posts[i].categories[0].slug!=="notice") {
          slidesArr.push(this.posts[i])
        }
      }
      return slidesArr.slice(0, 5)
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
