<template>
  <div>
    <div class="routine-wrapper">
      <div-header :header="'赛程详情'"></div-header>
      <div>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 大赛于3月12日启动后，选手可以进行<a target="_blank"
                                                                      :href="'http://www.mooctest.net/contest/list'">报名</a>、参与<span class="href-span"
          @click="goToStudentTrainPage">辅导</span>、参加练习赛；师资培训和省赛申请也同时启动。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 2018年IEEE北美邀请赛于1月27日举行，IEEE欧洲邀请赛将于7月16日-18日举行，邀请2017总决赛和2018练习赛优秀选手。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 每个分项的省赛一等奖3人、二等奖5人、三等奖8人、优胜奖若干；一等奖直接进入总决赛，其他选手参加全国总排名争取总决赛名额。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 3月开始省赛承办申请，省赛获取固定总决赛名额，其他省份选手参加互联网赛争夺总决赛名额。省赛需要获得省教育厅、省经信委和省计算机学会至少其中一个单位的官方发文支持，省赛的冠名赞助和比赛方案自行商定，组委会协助。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. 2018学生参赛报名免费，差旅和住宿等费用自理。
        </p>
      </div>
    </div>
  </div>
</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import {router} from '../../main'

  export default {
    name: 'education',
    components: {
      DivHeader
    },
    data() {
      return {}
    },
    methods: {
      goToStudentTrainPage() {
        router.push({name: 'StudentTrainPage'})
      }
    }
  }
</script>

<style scoped src="./Routine.css"></style>
