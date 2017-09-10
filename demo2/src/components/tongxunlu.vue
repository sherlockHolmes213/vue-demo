<template>
  <div class="tongXunLu">
    <ul class="title">
      <router-link tag="li" to="/WeChat/Liaotian">
        <img alt="" v-bind:src="msg">
        新的朋友
      </router-link>
      <router-link tag="li" to="/WeChat/Liaotian">
        <img alt="" v-bind:src="msg">
        新的朋友
      </router-link>
      <router-link tag="li" to="/WeChat/Liaotian">
        <img alt="" v-bind:src="msg">
        新的朋友
      </router-link>
      <router-link tag="li" to="/WeChat/Liaotian">
        <img alt="" v-bind:src="msg">
        新的朋友
      </router-link>
    </ul>

    <ul class="tongxun">
      <li  v-for="tongxun in tongxunluname" class="tName">
        <img alt="" v-bind:src="msg">
        {{ tongxun.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'tongXunLu',
    data () {
      return {
        msg:require('../img/QQ截图20170906165149.png'),
        tongxunluname:""
      }
    },
    methods:{
    },
    created: function () {
      this.$ajax({
        method:'get',
        url:'http://localhost:8080/static/data/tsconfig.json',
      }).then(function (response) {
        var data = response.data.tongxunlu;
        //debugger;
        this.tongxunluname = data;
        console.log(this);
      }.bind(this))
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  ul{
    width: 100%;
  }
.title>li{
  font-size: 5rem;
  padding: 30px 30px;
  text-align: left;
  float: left;
  width:100%;
  vertical-align: middle;
  border-bottom: 1px #666666 solid;
}
.title,.tongxun,.title>li,.tongxun>li{
  overflow: auto;
}

ul>li>img,.tName>img{
  float: left;
  width: 150px;
  height: 100%;
}
.tName>img{
  float: left;
  width: 150px;
  height: 100%;
}
.tName{
  font-size: 4rem;
  text-align: left;
}
  .tongxun>li{
    padding: 20px 30px;
  }
</style>
