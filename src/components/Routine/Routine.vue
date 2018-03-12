<template>
  <div>
    <div class="routine-wrapper">

      <button class="sub-title">
        赛程说明
      </button>

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

    <div class="routine-intro-wrapper">
      <div-header :header="'预选赛说明'"></div-header>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;预选赛报名时间即将发布，请关注官网通知。
      </p>
    </div>

    <div class="routine-intro-wrapper provinceIntro">
      <div-header :header="'省赛说明'"></div-header>

      <div>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;截止到3月12日，还没有申请承办省赛的省市。省赛承办申请相关事宜请联系<span
          class="href-span"
          @click="goToCommitteePage">大赛秘书处</span>。
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
        const jump = document.querySelector('.provinceIntro')
        // 获取需要滚动的距离
        let total = jump.offsetTop * 2

        console.log(total)

        // Chrome
        document.body.scrollTop = total
        // Firefox
        document.documentElement.scrollTop = total
        // Safari
        window.pageYOffset = total
      }
    }
  }
</script>

<style scoped src="./Routine.css"></style>
