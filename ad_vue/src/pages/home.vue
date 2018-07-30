<template>
  <div class="main content">
    <div class="slider">
      <el-carousel>
        <el-carousel-item v-for="(item, index) in sliderData" :key="index" type="card">
          <img v-lazy="item.imgSrc" @click="goAddress(item.path)">
        </el-carousel-item>
      </el-carousel>
    </div><!-- slider end -->

    <div class="notice clearfix" @click="goAddress('promotions')">
      <span><i class="el-icon-bell"></i></span>
      <marquee>皇冠现金网为回馈新老会员，新会员首次存款即可获得可得30%彩金，老会员更有最低168元的世界杯优惠返还彩金，详情查看优惠介绍页面！</marquee>
      <span>>MORE</span>
    </div><!-- notice end -->

    <div class="hot-match">
      <h4>赛事推荐<i class="el-icon-refresh fr" @click="fetchmatchList()"></i></h4>
      <ul class="clearfix">
        <li class="clearfix" v-for="match in matchData" v-if="matchData">
          <div class="match-date fl">
        	<p class="league">{{ match.leagueMatch.leagueName }}</p>
            {{ match.matchDate }}&nbsp;{{ match.matchTime }}
          </div>
          <div class="match-team fl">
            <div class="team">
              <span class="teamA">
              	<img v-lazy="match.homeTeam.teamIcon">
                {{ match.homeTeam.teamName }}
	            </span>VS
              <span class="teamB"> 
              	<img v-lazy="match.guestTeam.teamIcon">
	            {{ match.guestTeam.teamName }}
	          </span>
            </div>
            <p v-if="match.matchStatus === 1">未开始</p>
            <p v-if="match.matchStatus === 2">进行中</p>
            <el-button type="warning" @click="goBet()">立即投注</el-button>
          </div>
        </li>
        <li v-else="matchData" class="no-data">暂无赛事推荐</li>
      </ul>
    </div><!-- hot-match end -->

    <div class="home-mid clearfix">
      <div class="left fl">
        <h2>热门球类</h2>
        <ul>
          <li @click="goHelp('sports','ft')">足球<span>FOOTBALL</span></li>
          <li @click="goHelp('sports','bk')">篮球<span>basketball</span></li>
          <li @click="goHelp('sports','ym')">羽毛球<span>badminton</span></li>
          <li @click="goHelp('sports','tn')">网球<span>tennis</span></li>
          <li @click="goHelp('sports','more')">更多<span>more</span></li>
        </ul>
      </div>
      <div class="right fr">
        <div class="item item-sports">
          <div class="img">
            <img src="../assets/images/bg-home-sports.jpg">
          </div>
          <div class="txt">
            <span @click="goAddress('/help/index?type=sports&sport=ft')">查看详情</span> 
          </div>
          <div class="bottom-title">
            <h2>体育投注</h2>
          </div>
        </div> 

        <div class="bottom clearfix">
          <div class="item item-ag fl">
            <div class="img">
              <img src="../assets/images/bg-home-ag.jpg">
            </div>
            <div class="txt">
              <span @click="goBet()">查看详情</span> 
            </div>
            <div class="bottom-title">
              <h2>真人视讯</h2>
            </div>
          </div> 

          <div class="item item-buyu fl">
            <div class="img">
              <img src="../assets/images/bg-home-cp.jpg">
            </div>
            <div class="txt">
              <span @click="goAddress('lottery')">查看详情</span> 
            </div>
            <div class="bottom-title">
              <h2>彩票游戏</h2>
            </div>
          </div>          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 别人写好的代理接口，代理发送你的请求，这样就不会跨域了，牛b
const API_PROXY = '//bird.ioliu.cn/v1/?url='

// 即时赛事api
const todayMatchUrl = 'https://hongcai.163.com/api/web/matchInfo/getOddsChangeFilterMatchList/1'

// 下日赛事api
const nextDayMatchUrl = 'https://hongcai.163.com/api/web/matchInfo/getMatchScheduleList/1/0/200'

const apiToday = API_PROXY + todayMatchUrl

const apiNextDay = API_PROXY + nextDayMatchUrl

export default {
  data () {
    return {
      betLink: 'http://www.17hg88.com',
      matchData : [],
      sliderData :[
        {
          imgSrc: require('../assets/images/banner01.jpg'),
          path: '/lottery'
        },
        {
          imgSrc: require('../assets/images/banner03.jpg'),
          path: '/help/index?type=sports&sport=ft'
        },
        {
          imgSrc: require('../assets/images/banner04.jpg'),
          path: '/promotions'
        }
      ]
    }
  },
  mounted () {
  	this.fetchmatchList(apiToday)
  },
  methods: {
    goBet() {
      // window.open(this.betLink)
      this.$message('请登陆后体验');
    },
    goHelp(type,ball) {
      this.$router.push({ path: '/help/index', query: { type: `${type}`, sport: `${ball}` }})
    },
    goAddress (url) {
      this.$router.push({ path: url })
    },
    fetchmatchList (api) {
      let self = this
      self.$http.get(api).then((response) =>{
        if (response.data.code == 200) {
          this.matchData = response.data.data.matchList.slice(0, 3)
        }
        if (response.data.data.matchList.length === 0) {
          this.fetchmatchList(apiNextDay)
        }
      }).catch(function(err){
        console.log(err);
      })
    }
  }
}
</script>
