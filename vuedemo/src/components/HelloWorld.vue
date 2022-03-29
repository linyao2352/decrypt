<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>接口返回的姓名是： {{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      name: '111'
    }
  },
  mounted() {
    this.axios.get('api/person').then(res => {
      this.name = res.data.name
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
