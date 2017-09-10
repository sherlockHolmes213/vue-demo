<template>
  <div id="app">
    <router-view name="headerNav"></router-view>
    <router-view name="search"></router-view>
    <router-view></router-view>
    <router-view name="navBottom"></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .nav-bottom{
    width: 100%;
    position: fixed;
    bottom: 0;
    margin: 0;
    padding: 0;
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
