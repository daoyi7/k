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
      data: '',
      title: '',
      content: '',
      updatetime: '',
      type: '',
      author: ''
    }
  },
  methods: {
    getData() {
      let idArr = [],
          id = this.$route.params.id

      this.$http({
        method: 'get',
        url: 'http://47.94.89.18/api/core/get_posts/',
        params: {
          id: this.$route.params.id
        }
      }).then((res) => {
        this.data = res.data.posts

        for(let i=0;i<this.data.length;i++) {
          idArr.push(this.data[i].id)
        }

        const index = idArr.indexOf(parseInt(id))
        this.title = this.data[index].title_plain
        this.content =this.data[index].content
        this.updatetime = this.data[index].modified
        this.type = this.data[index].categories[0].slug
        this.author = this.data[index].author.name

      })
    }
  },
  mounted() {
    this.getData()
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
    width 63.4em
    margin 0 0 0 13em
    background rgba(236, 238, 239, 0.7)
    padding .4em 1.5em
</style>
