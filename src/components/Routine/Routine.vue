<template>
  <div>
    <div class="routine-wrapper">
      <div>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 大赛于3月12日启动后，选手可以进行<a target="_blank"
                                                                      :href="'http://www.mooctest.net/contest/list'">报名</a>、参与<span
          class="href-span"
          @click="goToStudentTrainPage">辅导</span>、参加练习赛；师资培训和<span class="href-span"
                                                                   @click="goToProvinceIntro">省赛申请</span>也同时启动。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 2018年<span class="href-span"
                                                            @click="goToAmerican2018Page">IEEE北美邀请赛</span>于1月27日举行，<span
          class="href-span"
          @click="goToEuropean2018Page">IEEE欧洲邀请赛</span>将于7月16日-18日举行，邀请2017总决赛和2018练习赛优秀选手。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 每个分项的省赛一等奖3人、二等奖5人、三等奖8人、优胜奖若干；一等奖直接进入总决赛，其他选手参加全国总排名争取总决赛名额。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 2018学生参赛报名免费，差旅和住宿等费用自理。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. 3月开始<span class="href-span"
                                                           @click="goToProvinceIntro">省赛承办申请</span>，省赛获取固定总决赛名额，其他省份选手参加互联网赛争夺总决赛名额。省赛承办申请相关事宜请联系<span
          class="href-span"
          @click="goToCommitteePage">大赛秘书处</span>。
        </p>
      </div>
    </div>
    <!--<div class="routine-intro-wrapper">-->
    <!--<div-header :header="'夏季预选赛时间'"></div-header>-->
    <!--<table class="date-list-table">-->
    <!--<thead>-->
    <!--<tr>-->
    <!--<th>夏季预选赛项目</th>-->
    <!--<th>比赛时间</th>-->
    <!--</tr>-->
    <!--</thead>-->
    <!--<tbody>-->
    <!--<tr>-->
    <!--<td>开发者测试</td>-->
    <!--<td>6月9日9:00-12:00</td>-->
    <!--</tr>-->
    <!--<tr>-->
    <!--<td>移动应用测试</td>-->
    <!--<td>6月9日14:00-17:00</td>-->
    <!--</tr>-->
    <!--<tr>-->
    <!--<td>Web应用测试</td>-->
    <!--<td>6月9日17:00-20:00</td>-->
    <!--</tr>-->
    <!--<tr>-->
    <!--<td>嵌入式测试</td>-->
    <!--<td>6月10日8:00-12:00</td>-->
    <!--</tr>-->
    <!--<tr>-->
    <!--<td>Web安全测试</td>-->
    <!--<td>6月10日14:00-18:00</td>-->
    <!--</tr>-->
    <!--</tbody>-->
    <!--</table>-->
    <!--</div>-->

    <div class="routine-intro-wrapper" id="provinceIntro">
      <div-header :header="'省赛说明'"></div-header>
      <div>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;省赛承办申请相关事宜请联系<span
          class="href-span"
          @click="goToCommitteePage">大赛秘书处</span>：xujianfeng@mooctest.com（徐老师），zychen@nju.edu.cn（陈老师）。
        </p>
      </div>
      <my-map></my-map>
    </div>


  </div>
</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import MyMap from './MyMap.vue'
  import {router} from '../../main'


  export default {
    name: 'education',
    components: {
      DivHeader,
      MyMap
    },
    data() {
      return {}
    },
    methods: {
      goToStudentTrainPage() {
        router.push({name: 'StudentTrainPage'})
      },
      goToAmerican2018Page() {
        router.push({name: 'American2018Page'})
      },
      goToEuropean2018Page() {
        router.push({name: 'European2018Page'})
      },
      goToCommitteePage() {
        router.push({name: 'CommitteePage'})
      },
      goToProvinceIntro() {
        $("html, body").animate({scrollTop: $("#provinceIntro").offset().top}, 500);
      }
    }
  }
</script>

<style scoped src="./Routine.css"></style>
