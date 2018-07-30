import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/pages/Home'], resolve)
    },{
      path: '/Approve',
      name: 'Approve',
      component: resolve => require(['@/pages/Approve'], resolve)
    },{
      path: '/GameTips',
      name: 'GameTips',
      component: resolve => require(['@/pages/GameTips'], resolve)
    },{
      path: '/News',
      name: 'News',
      component: resolve => require(['@/pages/News'], resolve)
    },{
      path: '/Promotions',
      name: 'Promotions',
      component: resolve => require(['@/pages/Promotions'], resolve)
    },{
      path: '/Casino',
      name: 'Casino',
      component: resolve => require(['@/pages/Casino'], resolve)
    },{
      path: '/Lottery',
      name: 'Lottery',
      component: resolve => require(['@/pages/Lottery'], resolve)
    },{
      path: '/help/index',
      name: 'Help',
      component: resolve => require(['@/pages/help/index'], resolve)
    },{
      path: '/register/agent',
      name: 'AgentReg',
      component: resolve => require(['@/pages/register/agent'], resolve)
    },{
      path: '/register/member',
      name: 'MemberReg',
      component: resolve => require(['@/pages/register/member'], resolve)
    },{
      path: '/2018',
      name: 'WorldCup',
      component: resolve => require(['@/pages/2018'], resolve)
    }
  ]
})