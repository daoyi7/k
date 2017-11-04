<template>
<div class="detail">
  <h2 class="title">
        <span>{{ this.title }}</span>
      </h2>
  <div class="main" v-html="this.content" @click.stop="imgIsShow">
    {{ this.content }}
  </div>
  <div class="img_view" v-if="imgShow" @click.stop="imgIsHide">
    <img :src="this.imgSrc">
  </div>
  <div class="more">
    <span class="published">This article published by {{ this.author }}</span>
    <span class="update">{{ this.updatetime }}</span>
    <span class="tag">{{ this.type }}</span>
  </div>
</div>
</template>

<script type="text/ecmascript-6">

export default {
  name: 'detail',
  data() {
    return {
      id: this.$route.params.id,
      data: [],
      title: '',
      content: '',
      updatetime: '',
      type: '',
      author: '',
      imgShow: false,
      imgSrc: ''
    }
  },
  methods: {
    getData(id) {
      let idArr = []

      this.$http({
        method: 'get',
        url: '/core/get_posts/?count=9999999999'
      }).then((res) => {
        this.data = res.data.posts

        for (let i = 0; i < this.data.length; i++) {
          idArr.push(this.data[i].id)
        }

        const index = idArr.indexOf(parseInt(id))
        this.title = this.data[index].title
        this.content = this.data[index].content
        this.updatetime = this.data[index].modified
        this.type = this.data[index].categories[0].slug
        this.author = this.data[index].author.name

        document.title = this.title + ' | kawhi.me'
      })
    },
    imgIsShow(e) {
      if(e.path[0].getAttribute('src'))
        this.imgShow = true
        this.imgSrc = e.path[0].getAttribute('src')
    },
    imgIsHide() {
      this.imgShow = false
    }
  },
  mounted() {
    this.getData(this.id)
    window.addEventListener('scroll', () => {
      this.imgShow = false
    })
  },
  watch: {
    '$route' (to, from) {
      if (to.name === 'detail') {
        this.id = this.$route.params.id
        this.getData(this.id)
      }
    }
  },
}
</script>

<style lang="stylus" scoped>

  .detail
    float left
    position relative
    overflow hidden
    width 61.4em
    margin 0 0 8em 13em
    background rgba(236, 238, 239, 0.7)
    padding .4em 2.5em
    .title
      width 100%
      line-height 2.5em
      font-size 1.8em
      font-weight 700
      text-align center
      padding-bottom 1.6em
    .main
      width 100%
      height auto
      overflow hidden
      font-size 1.4em
      line-height 2em
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
        max-width 90%
        max-height 90%
        border .25em solid rgba(238,238,238,0.5)
        border-radius .5em
    .more
      padding .4em 1.5em
      margin 1.9em 0 .8em
      background rgba(208, 208, 208, 0.7)
      overflow hidden
      font-size 1.4em
      line-height 2.2em
      span
        margin-right .8em
      span:last-child
        margin-right 0
</style>
