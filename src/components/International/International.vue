<template>

  <div>

    <div class="international-wrapper">

      <div-header :header="'软件测试国际邀请赛系列发布'"></div-header>

      <div>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;软件测试国际邀请赛系列发布，欢迎国内选手和老师参加，如需比赛邀请函，请联系陈振宇老师zychen@nju.edu.cn。
        </p>
        <br>
        <table class="international-list-table">
          <thead>
          <tr>
            <th class="no-decoration"></th>
            <th class="no-decoration">比赛时间</th>
            <th class="no-decoration">比赛地点</th>
          </tr>
          </thead>
          <tbody>
          <tr @click="goToEuropean2018">
            <th>2018欧洲赛2</th>
            <td>预计下半年</td>
            <td>维也纳</td>
          </tr>
          <tr @click="goToSAmerican2018">
            <th>2018南美赛</th>
            <td>预计9月</td>
            <td>巴西</td>
          </tr>
          <tr @click="goToEuropean2018">
            <th>2018欧洲赛1</th>
            <td>2018年7月16日</td>
            <td>里斯本</td>
          </tr>
          <tr @click="goToAmerican2018">
            <th>2018北美赛</th>
            <td>2018年1月27日</td>
            <td>达拉斯</td>
          </tr>
          <tr @click="goToEuropean2017">
            <th>2017欧洲赛</th>
            <td>2017年7月25日</td>
            <td>布拉格</td>
          </tr>
          </tbody>
        </table>

      </div>

    </div>
  </div>
</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import {router} from '../../main'

  export default {
    name: 'american',
    components: {
      DivHeader
    },
    data() {
      return {
        fileUrl: require('../../assets/img/samerican2018.jpg')
      }
    },
    methods: {
      goToLink() {
        window.location.href = 'http://paris.utdallas.edu/qrs18/contest.html'
      },
      goToEuropean2018(){
        router.push({name: 'European2018Page'})
      },
      goToSAmerican2018(){
        router.push({name: 'SAmerican2018Page'})
      },
      goToAmerican2018(){
        router.push({name: 'American2018Page'})
      },
      goToEuropean2017(){
        router.push({name: 'European2017Page'})
      }
    }
  }
</script>

<style scoped src="./International.css"></style>
