<template>
  <div class="main content help-center">
	<el-tabs :tab-position="tabPosition" v-model="activeName" @tab-click="handleClick">
		<el-tab-pane label="关于我们" name="about">
			<h1>关于我们</h1>
			<about></about>
		</el-tab-pane>
		<el-tab-pane label="用户协议" name="agreement">
			<h1>用户协议</h1>
			<agreement></agreement>
		</el-tab-pane>
		<el-tab-pane label="隐私政策" name="privacy">
			<h1>隐私政策</h1>
			<privacy></privacy>
		</el-tab-pane>
		<el-tab-pane label="博彩责任" name="responsibility">
			<h1>博彩责任</h1>
			<responsibility></responsibility>
		</el-tab-pane>
		<el-tab-pane label="免责声明" name="mianze">
			<h1>免责声明</h1>
			<mianze></mianze>
		</el-tab-pane>
		<el-tab-pane label="联系我们" name="contact">
			<h1>联系我们</h1>
			<contact></contact>
		</el-tab-pane>
		<el-tab-pane label="体育规则" name="sports">
			<h1>体育规则</h1>
			<sports></sports>
		</el-tab-pane>
		<el-tab-pane label="代理加盟" name="agent">
			<h1>代理加盟</h1>
			<agent></agent>
		</el-tab-pane>
	</el-tabs>
  </div>
</template>

<script>
import about from './about'
import contact from './contact'
import privacy from './privacy'
import mianze from './mianze'
import sports from './sports'
import agreement from './agreement'
import agent from './agent'
import responsibility from './responsibility'
export default {
	data() {
	  return {
	    tabPosition: 'left',
        activeName: 'about'
	  }
	},
	components: {
		responsibility,
		mianze,
		contact,
		about,
		privacy,
		sports,
		agent,
		agreement
	},
	methods: {
      handleClick(tab, event) {
        console.log(tab.name);
      }
    },
    created () {
    	if (this.$route.query.type) {
    		this.activeName = this.$route.query.type
    	}
    }
}
</script>