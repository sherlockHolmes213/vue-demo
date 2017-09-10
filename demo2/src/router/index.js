import Vue from 'vue'
import Router from 'vue-router'
import WeChat from '@/components/weChat'
import TongXunLu from '@/components/tongxunlu'
import FaXian from '@/components/faxian'
import Me from '@/components/me'
import Liaotian from '@/components/liaotian'
import navBottom from '@/components/navBottom'
import  headerNav from '@/components/header'
import search from '@/components/search'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:{
        name: 'WeChat',
      },
      components: {
        default:WeChat,
        navBottom:navBottom,
        headerNav:headerNav
      }
    },
    {
      path:'/WeChat',
      name:'WeChat',
      component:WeChat,
      components:{
        default:WeChat,
        navBottom:navBottom,
        headerNav:headerNav,
        search:search
      }
    },
    {
      path:'/WeChat/liaotian',
      component:Liaotian,
    },
    {
      path:'/Tongxunlu',
      name:'TongXunLu',
      components:{
        default:TongXunLu,
        navBottom:navBottom,
        headerNav:headerNav,
        search:search
      }
    },
    {
      path:'/Faxian',
      name:'Faxian',
      components:{
        default:FaXian,
        navBottom:navBottom,
        headerNav:headerNav
      }
    },
    {
      path:'/Me',
      name:'Me',
      components:{
        default:Me,
        navBottom:navBottom,
        headerNav:headerNav
      }
    }
  ]
})
