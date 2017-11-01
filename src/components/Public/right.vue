<template>
<div class="right" v-if="$route.path!=='/project'">
  <div class="search-box">
    <input class="search-text" type="text" v-model="searchText" placeholder="Search your want..." @keyup.enter="search">
    <button class="search-submit" @click="search">
      <i class="icon iconfont icon-search"></i>
    </button>
  </div>
  <div class="hot-reads">
    <h2 class="hot-all">
      <i class="icon iconfont icon-right-list"></i>
      <span class="hot-all-text">热门文章</span>
    </h2>
    <ul>
      <li class="hot-list" v-for="(hot,index) in hots" :key="index">
        <span class="hot-num">{{ index + 1 }}</span>
        <router-link class="hot-title" :to="{ name: 'detail',params: { id: hot.id}}">{{ hot.title }}</router-link>
      </li>
    </ul>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      searchText: '',
      hots: [],
    }
  },
  created() {
    let idArr = []

    this.$http({
        method: 'get',
        url: '/core/get_posts/?count=9999999999',
      }).then((res) => {
        let hotArr = []
        for(let i=0;i<res.data.posts.length;i++) {
          if(res.data.posts[i].categories[0].slug!=="notice") {
            hotArr.push(res.data.posts[i])
          }
        }

        this.hots = hotArr.slice(0, 10)
      })
      .catch(function(error) {
        console.error(error)
      })
  },
  methods: {
    search() {
      if (this.searchText !== '') {
        this.$router.push({
          path: '/search/' + this.searchText
        })
      }
    }
  },
}
</script>

<style lang="stylus" scoped>

    trans = .5s linear

    .right
        width 18em
        float right
        .search-box
            width 100%
            height auto
            overflow hidden
            display flex
            .search-text
                flex 1
                padding .1em
                width 17.6em
                height 2.2em
                line-height 2.2em
                margin 0
                font-size 1.2em
                font-weight 200
                text-indent .4em
                border none
                background rgba(255, 255, 255, 0.4)
                color rgb(162, 168, 173)
                transition background .5s linear
                &:hover,&:active,&:focus
                    outline none
                    background #d1d4d6
            .search-submit
                flex 0 0 2.4em
                width 2.4em
                height 2.2em
                padding 0
                margin 0
                text-align center
                line-height 2.2em
                border none
                background rgba(183, 191, 197, 0.4)
                cursor pointer
                transition background .15s linear
                &:hover,&:active,&:focus
                    outline none
                    background #a2a8ad
        .hot-reads
            width 100%
            height auto
            overflow hidden
            background-color rgba(255, 255, 255, 0.4)
            margin-top 1em
            .hot-all
                line-height 2.5em
                text-indent .8em
                font-size 1.4em
                .icon
                    vertical-align top
                .hot-all-text
                    font-size 1.1em
                    vertical-align top
            ul
                padding-bottom .5em
                .hot-list
                    width 17.2em
                    height 3em
                    line-height 3em
                    margin-left .8em
                    display flex
                    &:last-child .hot-num
                        text-align left
                        text-indent .08em
                    &:hover
                        .hot-num
                            background #00030d
                    .hot-num
                        flex 0 0 1.5em
                        width 1.5em
                        height 1.5em
                        background #b7bfc5
                        color #fff
                        display inline-block
                        text-align center
                        line-height 1.5em
                        margin-top 0.5em
                        font-size 1.4em
                        font-style italic
                        transition background trans
                    .hot-title
                        flex 1
                        color #00030d
                        font-size 1.3em
                        vertical-align middle
                        text-indent .7em
                        position relative
                        display inline-block
                        text-overflow ellipsis
                        white-space nowrap
                        overflow hidden

</style>
