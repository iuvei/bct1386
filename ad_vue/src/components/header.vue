<template>
  <header class="header main">
    <div class="header-top clearfix">
      <h1 class="fl">
        <router-link to="/">
          <img src="../assets/images/logo.png">
        </router-link>
      </h1>
      <ul class="top-right fr clearfix">
         <li class="login-box">
           <iframe src="http://hg1386.co/server/register/signin.php" width="355px" height="30px" frameborder="no" scrolling="no" border="0" framespacing="0"></iframe>
         </li>
         <li><router-link to='/register/member' class="btn-reg">注册</router-link></li>
       </ul>
    </div>
    <div class="header-bottom">
      <ul class="clearfix">
        <router-link tag="li" :to="item.path" v-for="(item, index) in navList"
             :key="index"
             @click="selectTimer(index)"
             :class="selectIndex === index ? 'default-active' : '' ">
             {{item.title}}
        </router-link>
        <li><a :href="betLink" target="_blank">会员登入</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      betLink: 'http://www.17hg88.com',
      selectIndex: 0,
      navList: [
        {
          title: '网站首页',
          path: '/'
        },
        {
          title: '彩票游戏',
          path: '/lottery'
        },
        {
          title: '会员注册',
          path: '/register/member'
        },
        {
          title: '优惠活动',
          path: '/promotions'
        },
        {
          title: '代理加盟',
          path: '/help/index?type=agent'
        },
        {
          title: '代理注册',
          path: '/register/agent'
        },
        {
          title: '关于我们',
          path: '/help/index?type=about'
        },
        /*{
          title: '世界杯',
          path: '/2018'
        }*/
      ]
    }
  },
  methods: {
    selectTimer(index) {
      this.selectIndex = index;
    }
  }
}
</script>

<style>
.router-link-exact-active {
  color: #f9a755!important;
}
</style>