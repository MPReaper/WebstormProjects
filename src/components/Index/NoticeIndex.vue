<template>

  <div class="notice-wrapper">

    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
      <div class="notice-left-wrapper hidden-xs-only">
        <div-header :header="'大赛焦点'"></div-header>
        <single-notice :title="'大赛新增AI系统测试分项'" :time="'2018-05-29'"
                       :link="'http://mooctest.org/#/NewProgress'"></single-notice>
        <single-notice :title="'2018全国大学生软件测试大赛师资培训班 [Web安全分项]'" :time="'2018-05-28'"
                       :link="'http://www.mooctest.org/#/TeacherTrain'"></single-notice>
        <single-notice :title="'2018全国大学生软件测试大赛学生培训安排'" :time="'2018-05-18'"
                       :link="'http://mooctest.org/#/StudentTrain'"></single-notice>
        <single-notice :title="'“杰出指导教师奖”和“杰出组织教师奖”评选办法'" :time="'2018-05-11'"
                       :link="jiechuUrl"></single-notice>

        <button class="more-button" @click="goToNoticePage">查看更多</button>
      </div>

      <div class="notice-left-wrapper hidden-sm-and-up">
        <div-header :header="'大赛焦点'"></div-header>
        <single-notice :title="'大赛新增AI系统测试分项'" :time="'2018-05-29'"
                       :link="'http://mooctest.org/#/NewProgress'"></single-notice>
        <single-notice :title="'大赛师资培训班 [Web安全分项]'" :time="'2018-05-28'"
                       :link="'http://www.mooctest.org/#/TeacherTrain'"></single-notice>
        <single-notice :title="'大赛学生培训安排'" :time="'2018-05-18'"
                       :link="'http://mooctest.org/#/StudentTrain'"></single-notice>
        <single-notice :title="'“杰出指导教师奖”和“杰出组织...'" :time="'2018-05-11'"
                       :link="jiechuUrl"></single-notice>

        <button class="more-button" @click="goToNoticePage">查看更多</button>
      </div>

    </el-col>

    <photo class="hidden-sm-and-down"></photo>
  </div>
</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import SingleNotice from './SingleNotice.vue'
  import Photo from './Photo.vue'
  import 'element-ui/lib/theme-chalk/display.css'
  import {Col} from 'element-ui'
  import {router} from '../../main'
  import xinankejiPdf from '../../assets/pdf/xinankeji.pdf'
  import xuanjiPdf from '../../assets/pdf/xuanji.pdf'
  import countryPdf from '../../assets/pdf/country.pdf'
  import jiechuPdf from '../../assets/pdf/jiechu.pdf'

  export default {
    name: 'notice',
    components: {
      DivHeader,
      SingleNotice,
      Photo,
      elCol: Col
    },
    data() {
      return {
        xuanjiUrl: xuanjiPdf,
        countryUrl: countryPdf,
        jiechuUrl: jiechuPdf
      }
    },
    methods: {
      goToNoticePage() {
        router.push({name: 'NoticePage'})
      }
    }
  }
</script>

<style scoped src="./NoticeIndex.css"></style>
