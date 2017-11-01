<template>
  <div class="detail">
      <h2 class="title">
        <span>{{ this.title }}</span>
      </h2>
      <div class="main" v-html="this.content">
        {{ this.content }}
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
      author: ''
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

        for(let i=0;i<this.data.length;i++) {
          idArr.push(this.data[i].id)
        }

        const index = idArr.indexOf(parseInt(id))
        this.title = this.data[index].title
        this.content =this.data[index].content
        this.updatetime = this.data[index].modified
        this.type = this.data[index].categories[0].slug
        this.author = this.data[index].author.name

      })
    }
  },
  mounted() {
    this.getData(this.id)
  },
  watch: {
    '$route'(to,from){
      if(to.name === 'detail') {
        this.id=this.$route.params.id
        this.getData(this.id)
      }
    }
  },
  filters: {
    info: function(value) {
      const reg = /<p>(.*?)<\/p>/g
      const result = value.match(reg)

      return RegExp.$1
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
