<template>
  <div class="floatRight">
    <h2>娱乐城推荐</h2>
    <table>
      <tr>
        <th>娱乐城</th>
        <th>返水</th>
        <th>首存</th>
      </tr>
      <tr>
        <td>HG1386</td>
        <td>1.2%</td>
        <td>30%</td>
      </tr>
      <tr>
        <td>HG1386官网</td>
        <td>1.2%</td>
        <td>30%</td>
      </tr>
      <tr>
        <td>HG1386国际版</td>
        <td>1.2%</td>
        <td>30%</td>
      </tr>
    </table>
  </div>  
</template>

<script>
export default {
  data () {
    return {
      adUrl: 'http://www.1386hg.com'
    }
  },
  methods: {
    goBet () {
      window.open(this.adUrl)
    }
  }
}
</script>

<style>
.floatRight {
  width: 100%;
  background-color: #FFF;
}
.floatRight h2 {
  background-color: #b38181;
  height: 40px;
  line-height: 40px;
  padding-left: 15px;
  border: solid 1px #DDD;
  border-bottom: none;
  font-size: 17px;
  color: #fff;
}
.floatRight ul {
  border: solid 1px #DDD;
}
</style>