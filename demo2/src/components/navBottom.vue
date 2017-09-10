<template>
    <ul class="nav-bottom">
      <router-link to="WeChat" tag="li"><icon name="account" scale="10" class="bottom"  ></icon>
        <br>微信</router-link>
      <router-link to="TongXunLu" tag="li"><icon name="account" scale="10" class="bottom"  ></icon>
        <br>通讯录</router-link>
      <router-link to="FaXian" tag="li"><icon name="account" scale="10" class="bottom"  ></icon>
        <br>发现</router-link>
      <router-link to="Me" tag="li"><icon name="account" scale="10" class="bottom"  ></icon>
        <br>我</router-link>
    </ul>
</template>

<script>
  export default {
    name: 'navBottom',
  }
</script>

<style>
  .nav-bottom{
    width: 100%;
    position: fixed;
    bottom: 0;
    margin: 0;
    padding: 0;
    background-color: #eeeeee;
  }
  .nav-bottom>li{
    float: left;
    list-style: none;
    font-size: 3rem;
    width: 25%;
    text-align: center;
  }
  .bottom{

  }
</style>
