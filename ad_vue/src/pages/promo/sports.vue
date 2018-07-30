<template>
  <div class="promo-page clearfix">
    <div class="promo-box">
      <ul class="clearfix">
        
        <li class="box">
            <div class="pic">
              <img src="../../assets/images/promo/01.jpg" alt="">
            </div>
            <div class="tit clearfix">
                <h1>2018俄罗斯世界杯巅峰钜惠</h1>            
                <div class="btn promtion-detail" @click="showDetail(1)">
                  <span>点击查看</span><i class="el-icon-plus"></i>
                </div>
            </div> 
            <div class="promo-detail" v-if="isShowDetail1">
              <p><strong>活动时间：</strong>美东时间2018年6月14号-2018年7月15号</p>
              <p><strong>活动对象：</strong>2018年7月16号前有过充值记录会员</p>

              <table>
                <tbody>
                  <tr>
                    <th>注册日期</th>
                    <th>累计充值</th>
                    <th>昨日有效投注</th>
                    <th>免费送</th>
                    <th>流水要求</th>
                  </tr>
                  <tr>
                    <td>2018年05月01日后</td>
                    <td>5000</td>
                    <td>3000</td>
                    <td>168</td>
                    <td>一倍流水</td>
                  </tr>
                  <tr>
                    <td>2018年04月30日前</td>
                    <td>10000</td>
                    <td>3000</td>
                    <td>668</td>
                    <td>一倍流水</td>
                  </tr>
                </tbody>
              </table>

              <p><strong>活动内容：</strong></p>

              <ol>
                <li>至14号起达到相对应条件可免费领取对应金额。</li>
                <li>所获得红利需一倍流水才可提款。</li>
                <li>达到领取条件点击“联系客服领取”后，客服确认后会添加至会员账户。</li>
                <li>任何出现对打情况的投注、无风险投注、或赔率低于0.65以下将不累积有效投注。</li>
                <li>会员同一地址，同一账户，同一姓名，同一提款账户，同一电话或同一IP等相同者，我们将视为同一人。</li>
                <li>本网站保留对活动的最终解释权，以及在无通知的情况下修改、终止活动的权利。</li>
              </ol>
            </div> 
        </li>
        
        <li class="box">
            <div class="pic">
              <img src="../../assets/images/promo/02.jpg" alt="">
            </div>
            <div class="tit clearfix">
                <h1>首次存款可得30%彩金</h1>            
                <div class="btn promtion-detail" @click="showDetail(2)">
                  <span>点击查看</span><i class="el-icon-plus"></i>
                </div>
            </div> 
            <div class="promo-detail" v-if="isShowDetail2">
              <p>只要您在HG1386注册成会员后，进行第一次存款就可以得到30%彩金，最高可达8888。</p>

              <table>
                <tbody>
                  <tr>
                    <th>存款</th>
                    <th>红利比例</th>
                    <th>红利金额</th>
                    <th>流水倍数</th>
                    <th>最低存款</th>
                  </tr>
                  <tr>
                    <td>首存</td>
                    <td>30%</td>
                    <td>最高可达8888元</td>
                    <td>15倍</td>
                    <td>100元</td>
                  </tr>
                </tbody>
              </table>

              <p><strong>活动内容：</strong></p>

              <ol>
                <li>在HG1386进行第一次存款时，会员可自由选择，获取/放弃。</li>
                <li>会员首次存款后, 必须24小时内向在线客服申请, 审核通过后将在20分钟内派发到您的会员账户里, 最高金额8888进入会员账号。</li>
                <li>首次存款优惠必须要有效投注额的15倍才可申请提款（例：会员入款1000获得优惠300，在有效下注总额达（1000+300）x15=19500才可以申请提款）财务保留权限审核/取消您的提款申请。</li>
                <li>每位会员首存红利只限申请一次，多账户申请将被取消申请此优惠资格。</li>
                <li>皇冠1386保留所有权利在任何时候都可以更改.停止.取消优惠活动。</li>
                <li>本优惠不得与返水优惠并用，会员获得首次存款优惠后，必须成功进行一次取款才可获得返水。</li>
              </ol>
              <p>注意：如果在未向客服申请红利之前已经投注，我们将视为您放弃本优惠享有权利。</p>
            </div> 
        </li>
        
        <li class="box">
            <div class="pic">
              <img src="../../assets/images/promo/03.jpg" alt="">
            </div>
            <div class="tit clearfix">
                <h1>会员二次存款可得15%彩金</h1>            
                <div class="btn promtion-detail" @click="showDetail(2)">
                  <span>点击查看</span><i class="el-icon-plus"></i>
                </div>
            </div> 
            <div class="promo-detail" v-if="isShowDetail2">
              <p>只要您在HG1386进行再次存款（账户余额低于50元），就可以得到15%彩金，最高可达5888。</p>

              <table>
                <tbody>
                  <tr>
                    <th>存款</th>
                    <th>红利比例</th>
                    <th>红利金额</th>
                    <th>流水倍数</th>
                    <th>最低存款</th>
                  </tr>
                  <tr>
                    <td>二次存款</td>
                    <td>15%</td>
                    <td>最高可达5888元</td>
                    <td>10倍</td>
                    <td>100元</td>
                  </tr>
                </tbody>
              </table>

              <p><strong>活动内容：</strong></p>

              <ol>
                <li>在HG1386进行再次存款时，会员可自由选择，获取/放弃。</li>
                <li>会员再次存款后，必须24小时内向在线客服申请，审核通过后将在20分钟内派发到您的会员账户里，最高金额5888进入会员账号。</li>
                <li>再次存款优惠必须要有效投注额的10倍才可申请提款（例：会员入款1000获得优惠150，在有效下注总额达（1000+150）x10=11500才可以申请提款）财务保留权限审核/取消您的提款申请。</li>
                <li>每位会员再次存款红利只限申请一次，多账户申请将被取消申请此优惠资格。</li>
                <li>无论是个人或团体，如有任何威胁，滥用皇冠1386优惠的行为，经财务审核，皇冠1386保留权利取消.收回优惠以及优惠产生的盈利。</li>
                <li>皇冠1386保留所有权利在任何时候都可以更改/停止/取消优惠活动。</li>
                <li>本优惠不得与返水优惠并用，会员获得再次存款优惠后，必须成功进行一次取款才可获得返水。</li>
              </ol>
              <p>注意：如果在未向客服申请红利之前已经投注，我们将视为您放弃本优惠享有权利。</p>
            </div> 
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      isShowReg: true,
      isShowDetail1: false,
      isShowDetail2: false,
      // promoList: [],
      products: [
        {
          name: '所有优惠',
          path: '../Promotion/All',
          active: false
        },
        {
          name: '体育优惠',
          path: '../Promotion/Sports',
          active: false
        },
        // {
        //   name: '真人优惠',
        //   path: '../Promotion/Casino',
        //   active: false
        // },
        // {
        //   name: 'VIP优惠',
        //   path: '../Promotion/Vip',
        //   active: false
        // },
        // {
        //   name: '电子优惠',
        //   path: '../Promotion/Solt',
        //   active: false
        // },
        // {
        //   name: '其他优惠',
        //   path: '../Promotion/Other',
        //   active: false
        // }
      ]
    }
  },
  mounted () {
    // this.getPromoList()
  },
  methods: {
    showDetail(id){
      if (id === 1) {
        this.isShowDetail1 = !this.isShowDetail1
      }
      if (id === 2) {
        this.isShowDetail2 = !this.isShowDetail2
      }
      if (id === 3) {
        this.isShowDetail3 = !this.isShowDetail3
      }
      if (id === 4) {
        this.isShowDetail4 = !this.isShowDetail4
      }
    }
    // getPromoList () {
    //   var _this = this
    //   _this.$http.get('/static/promoList.json')
    //   .then((res) => {
    //     _this.promoList = res.data.promoList
    //     // console.log(res.data.promoList)
    //   }, (err) => {
    //     console.log(err)
    //   })
    // }
  }
}
</script>

<style> 
* {
  margin: 0;
  padding:0;
}
a {
  text-decoration: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}  
.promo-page img {
  max-width: 100%;
  width: 100%;
  height: 320px;
  border-bottom: 1px solid #ED7117;  
}
.promo-page {
  line-height: 25px;
  font-size: 14px;
  text-align: left; 
  margin: 0 auto;
}
.promo-box .list {
  transition: all .5s ease;
}
 

.text li {
  font-size: 14px;
}
h4.title {
      font-weight: 900;
    color: #dd0000;
    font-size: 15px;
    line-height: 28px;
    margin: 5px 0 15px 0;
}
 .promo-box  ul {
  margin: 0;
 }
.promo-box li.box {
  width: 49%;
  float: left;
  background: #3e3e3e;
  padding: 0;
  margin-top: 0;
  transition: all .5s ease;
  margin-bottom: 20px;
}
.promo-box li.box:nth-child(odd) {
  margin-right: 2%;
} 
.promo-box li.box .tit {
    width: 100%; 
    height: 35px;
    line-height: 26px;
    background-color: #3e3e3e;
    color: #fff;
    padding: 0 10px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
}
.promo-box li.box .tit h1 {
    font-size: 18px;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    float: left;
    font-weight: normal;
}
.promo-box li.box .tit time {
    font-size: 12px;
    color: #939393;
}
 
 
 
.tit h1 {
  width: 80%;
}
.promtion-detail {
  float: right;
  text-align: center;
  width: 90px;
  cursor: pointer; 
  font-size: 14px; 
}
 .promtion-detail i {
  margin-left: 5px;
 }
  .box .promo-detail {
     color: #ccc;
    padding: 20px;
    border-top: 1px dashed #ddd;
  }
.promo-detail strong {
    line-height: 32px;
    text-align: left;
     color: #b7e01b;
}

.promo-detail table {
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    text-align: center;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    margin: 10px 0;
}
tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
.promo-detail p {
    text-align: left;  
}
.promo-detail tr {
    height: 32px;
}
.promo-detail th {
    border-left: 1px solid #7b7b7b;
    border-top: 1px solid #7b7b7b;
    background-color: #585757;
} 
.promo-detail td,
.promo-detail th {
  line-height: 32px;
  text-align: center;
}
.info-items ol {
    list-style-type: decimal;
    margin-left: 25px;
}
.info-items ol li {
    list-style-type: decimal;
}
.promo-detail ol>li {
    margin: 10px 0;
    list-style-type: decimal;
    text-align: left;
    line-height: 25px;
}
.promo-detail a {
    color: #ee9a06;
}






 
</style>
