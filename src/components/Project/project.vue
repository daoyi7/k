<template>
<div class="project">
  <div class="item" v-for="(repo, index) in repos" key="index">
    <a :href="repo.html_url">
      <div class="thumb">
        <i class="icon iconfont" :class="['icon-' + repo.language]"></i>
      </div>
      <div class="content">
        <h3 class="title">{{ repo.name }}</h3>
        <p class="description">{{ repo.description }}</p>
        <div class="info">
          <span class="star"><i class="icon iconfont icon-star-full"></i>{{ repo.stargazers_count }}</span>
          <span class="fork"><i class="icon iconfont icon-fork"></i>{{ repo.forks_count }}</span>
        </div>
      </div>
    </a>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      repos: Array,
    }
  },
  created() {
    this.$http({
        method: 'get',
        url: 'https://api.github.com/users/daoyi7/repos',
      }).then((res) => {
        this.repos = res.data
        console.log(res.data)
      })
      .catch(function(error) {
        console.error(error);
      })
  }
}
</script>

<style lang="stylus" scoped>

    trans = .5s linear

    .project
      float: left
      width: 66.4em
      margin: 0 0 0 13em
      position: relative
      overflow: hidden
      display: flex
      flex-wrap: wrap
      .item:hover
        background: rgba(255, 255, 255, 0.3)
        .thumb
          img
            transform: scale(1.5)
      .item:last-child
        margin-right: 0
      .item
        margin: 0 .4em .8em 0
        background: rgba(255, 255, 255, 0.7)
        flex: 0 0 16.2em
        width: 16.2em
        transition: background trans
        .thumb
          width: 100%
          height: 10em
          overflow: hidden
          text-align: center
          line-height: 12.5em
          i
            font-size: 5em
            color: #5d5c5c
        .content
          padding: .4em 1em 1.2em 1em
          .title
            line-height: 2em
            text-align: center
            font-size: 1.5em
            color: #00030d
            font-weight: 700
            white-space: nowrap
            margin-bottom: .4em
          .description
            margin-bottom: 1rem
            text-align: left
            color: #00030d
            line-height: 2em
            text-indent: 1.6em
            font-size: 1.1em
            height: 4em
            -o-text-overflow: ellipsis
            text-overflow: ellipsis
            display: -webkit-box
            overflow: hidden
            -webkit-line-clamp: 2
            -webkit-box-orient: vertical
          .info
            display: flex
            padding-top: 1em
            border-top: 1px solid #b7bfc5
            color: #00030d
            span
              flex: 1
              text-align: center
              font-size: 1.4em

</style>
