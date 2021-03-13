import Vue from 'vue'
import Router from 'vue-router'
import Mainpage from '@/components/MainPage.vue'
import Interview from '@/components/interview.vue'
import news_detail from '@/components/news_detail.vue'
import Timeline from '@/components/Timeline.vue'

Vue.use(Router);

export default new Router({
  //mode:'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path:'/',
      name:'Mainpage',
      component:Mainpage,
      meta:{
        index:0,
        title:'欢迎页面'
      }
    },
    {
      path: '/home',
      name: 'Timeline',
      component: Timeline,
      meta:{
        index:1,
        title:'主界面'
      }
    },
        {
      path: '/shuevent',
      name: 'news_detail',
      component: news_detail,
      meta:{
        index:1,
        title:'主界面'
      }
    },

  {
    path: '/renwu',
    component: Interview,
    name: 'interview'
  },
    {
      path:'/timeline',
      name:'timeline',
      component:Timeline,
      meta:{
        index:2,
        title:'时间轴'
      }
    },
  ]
})

