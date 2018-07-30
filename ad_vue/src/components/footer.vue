<template>
  <footer class="footer">
    <div class="main footer-content">
      <ul>
        <li @click="goHelp('about')">关于我们</router-link></li>
        <li @click="goHelp('agreement')">用户协议</router-link></li>
        <li @click="goHelp('responsibility')">博彩责任</router-link></li>
        <li @click="goHelp('mianze')">免责声明</router-link></li>
        <li @click="goHelp('contact')">联系我们</router-link></li>
        <li @click="goHelp('sports')">体育规则</router-link></li>
      </ul>
      <p class="copyright">皇冠现金网由菲律宾First Cagayan博彩监管机构授权和监管。我们拥有一流在线博彩技术和经验丰富的运营团队，在环球范围内信誉卓著，致力于为亚洲用户提供高品质的在线体育服务。<br>版权所有 ©2018 HG1386.CO</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    goHelp(type) {
      this.$router.push({ path: '/help/index', query: { type: `${type}`}})
    }
  }
}
</script>