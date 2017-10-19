<template>
<div class="hello">
  <ul v-for="(post, index) in api">
    <li>{{ post.id }}</li>
  </ul>
  <test :test="use"></test>
</div>
</template>

<script>
import Vue from 'vue'
import axios from "axios"
Vue.prototype.$http = axios
import test from '@/components/test'

export default {
  name: 'HelloWorld',
  data() {
    return {
      api: {},
      use: ''
    }
  },
  components: {
    test
  },
  created() {
    this.$http({
        method: 'get',
        url: 'http://47.94.89.18/?json=1',
      }).then((res) => {
        this.api = res.data.posts
        this.use = res.data.status
      })
      .catch(function(error) {
        console.log(error);
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
