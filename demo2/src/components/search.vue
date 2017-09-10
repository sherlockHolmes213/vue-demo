\<template>
  <div class="secrch">
    <input type="search" placeholder="搜索" class="inputSearch" @focus="inputOnFocus" @blur="inputOutFocus">
  </div>
</template>

<script>
  export default {
    name: 'secrch',
    methods:{
      inputOnFocus:function () {
        this.$el.childNodes[0].placeholder =  "";
      },
      inputOutFocus:function () {
        this.$el.childNodes[0].placeholder =  "搜索";
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .secrch{
    background-color: #eeeeee;
    padding: 30px 30px;
  }
  .inputSearch {
    height: 100px;
    width: 100%;
    font-size: 50px;
    border-radius: 10%;
  }
</style>
