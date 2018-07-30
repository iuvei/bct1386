<template>
  <div class="main content promo-page">
    <el-tabs v-model="activeName" @tab-click="handleClick" :tab-position="tabPosition" >
	    <el-tab-pane label="体育优惠" name="first">
	    	<sports></sports>
	    </el-tab-pane>
	    <el-tab-pane label="真人优惠" name="second"><div class="no-data">暂无优惠</div></el-tab-pane>
	    <el-tab-pane label="其他优惠" name="third"><div class="no-data">暂无优惠</div></el-tab-pane>
	  </el-tabs>
  </div>
</template>

<script>
import sports from './promo/sports'
export default {
	data() {
	  return {
	    tabPosition: 'top',
	    activeName: 'first'
	  };
	},
	components: {
		sports
	},
	methods: {
	  handleClick(tab, event) {
	    console.log(tab, event);
	  }
	}
}
</script>

<style>
.promo-page .el-tabs__nav-wrap {
	width: auto;
	height: 50px;
	background: #3e3e3e;
	border-bottom: 1px solid #ED7117;
}
.promo-page .el-tabs__item {
	z-index: 2;
    width: 160px;
    font-size: 15px;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
    font-size: 15px;
    color: #dcdcdc;
    text-align: center;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
}
.promo-page .el-tabs__active-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50px;
    background-color: #ED7117;
    z-index: 1;
}
.promo-page .el-tabs__item.is-active,
.promo-page .el-tabs__item:hover {
	color: #fff;
}
.promo-page .el-tabs {
	margin-top: 30px;
}
</style>