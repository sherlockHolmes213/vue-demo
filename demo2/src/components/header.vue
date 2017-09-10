<template>
  <div class="header">
    <div class="headerNav">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header',
//    data(){
//      return {
//        mid : this.getUrl()
//      }
//    },
//    watch:{
//      mid:function () {
//      }
//    },
    //获取url地址
//    methods:{
//      getUrl:function () {
//        var _this = this;
//        var mid =  this.$route.path;
//        console.log('1')
//        return mid;
//      }
//    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .headerNav{
    height: 135px;
    background: black;
  }
  p{
    font-size: 50px;
    color: #fff;
  }
</style>
