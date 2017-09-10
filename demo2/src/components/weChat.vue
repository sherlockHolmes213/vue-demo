<template>
  <div class="weChat">
    <ul>
      <router-link v-for="msg in msgs" v-bind:key="msg.messageId" to="/WeChat/Liaotian">
        <div class="content">
          <img alt="" v-bind:src="msg.imgSrc">
            <p class="mName">{{ msg.messageName }}</p>
            <p class="mContent">{{ msg.messageConter }}</p>
        </div>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'weChat',
    data () {
      return {
        msgs: [
          {
            messageId:1,
            messageName:'杨',
            messageConter:'这是消息内容1',
            imgSrc:require('../img/QQ截图20170906165149.png')
          },
          {
            messageId:2,
            messageName:'杨',
            messageConter:'这是消息内容2',
            imgSrc:require('../img/QQ截图20170906165149.png')
          },
          {
            messageId:3,
            messageName:'杨',
            messageConter:'这是消息内容3',
            imgSrc:require('../img/QQ截图20170906165149.png')
          },
          {
            messageId:4,
            messageName:'杨',
            messageConter:'这是消息内容4',
            imgSrc:require('../img/QQ截图20170906165149.png')
          },
          {
            messageId:5,
            messageName:'杨',
            messageConter:'这是消息内容5',
            imgSrc:require('../img/QQ截图20170906165149.png')
          },
          {
            messageId:6,
            messageName:'杨',
            messageConter:'这是消息内容6',
            imgSrc:require('../img/QQ截图20170906165149.png')
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .weChat{
    padding: 0px 30px;
  }
.weChat>ul>li{
  width: 100%;
  list-style: none;
}
.content{
  font-size: 4rem;
  height: 150px;
  padding: 20px 0px;
  border-bottom: 1px solid #666666;
}
.content>img{
  float: left;
  width: 150px;
  height: 100%;
}
.mName,.mContent{
  text-align: left;
  height: 50%;
  padding-left: 50px;
}
</style>
