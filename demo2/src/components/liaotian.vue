<template>
  <div class="liaotian">
    <p>
      <router-link to="/WeChat" tag="button">{{ msg }}</router-link>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'liaotian',
    data () {
      return {
        msg: '返回按钮'
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  font-size: 40px;
}
.nav-bottom{
  display: none;
}

</style>
