<template>
  <div>
    <div class="notice-wrapper hidden-xs-only">
      <div-header :header="'大赛通知'"></div-header>
      <div class="main-notice-wrapper">
        <single-notice :title="'2018全国大学生软件测试大赛师资培训班 [Web安全分项]'" :time="'2018-05-28'"
                       :link="'http://www.mooctest.org/#/TeacherTrain'"></single-notice>
        <single-notice :title="'2018全国大学生软件测试大赛学生培训安排'" :time="'2018-05-18'"
                       :link="'http://mooctest.org/#/StudentTrain'"></single-notice>
        <single-notice :title="'“杰出指导教师奖”和“杰出组织教师奖”评选办法'" :time="'2018-05-11'"
                       :link="jiechuUrl"></single-notice>
        <single-notice :title="'关于举办2018年全国大学生软件测试大赛的通知'" :time="'2018-04-28'"
                       :link="countryUrl"></single-notice>
        <single-notice :title="'北京旋极信息技术集团人才招聘公告'" :time="'2018-04-28'"
                       :link="xuanjiUrl"></single-notice>
        <single-notice :title="'大赛新增开发者测试B组'" :time="'2018-04-12'"
                       :link="'http://mooctest.org/#/NewProgress'"></single-notice>
        <single-notice :title="'2018大赛正式开放报名'" :time="'2018-04-09'"
                       :link="'http://www.mooctest.net/contest/list'"></single-notice>
        <single-notice :title="'大赛新增AI系统测试分项'" :time="'2018-04-02'"
                       :link="'http://mooctest.org/#/NewProgress'"></single-notice>
        <single-notice :title="'西南科技大学人才招聘公告'" :time="'2018-03-30'"
                       :link="xinankejiUrl"></single-notice>
        <single-notice :title="'2018大赛安排公布'" :time="'2018-03-10'"
                       :link="'http://mooctest.org/#/Routine'"></single-notice>
        <single-notice :title="'2018大赛论坛火热开启'" :time="'2018-03-10'"
                       :link="'http://forum.mooctest.net/'"></single-notice>
        <single-notice :title="'2018北美赛圆满落幕'" :time="'2018-01-28'"
                       :link="'http://mooctest.org/#/American2018'"></single-notice>
        <single-notice :title="'2017大赛IEEE新闻'" :time="'2017-11-30'"
                       :link="'http://rs.ieee.org/images/files/newsletters/2017/3_2017/d_RSnews/SWTestingContest.html'"></single-notice>
      </div>
    </div>

    <div class="notice-wrapper hidden-sm-and-up">
      <div-header :header="'大赛通知'"></div-header>
      <div class="main-notice-wrapper">
        <single-notice :title="'大赛师资培训班 [Web安全分项]'" :time="'2018-05-28'"
                       :link="'http://www.mooctest.org/#/TeacherTrain'"></single-notice>
        <single-notice :title="'大赛学生培训安排'" :time="'2018-05-18'"
                       :link="'http://mooctest.org/#/StudentTrain'"></single-notice>
        <single-notice :title="'“杰出指导教师奖”和“杰出组织...'" :time="'2018-05-11'"
                       :link="jiechuUrl"></single-notice>
        <single-notice :title="'关于举办2018年全国大学生软...'" :time="'2018-04-28'"
                       :link="countryUrl"></single-notice>
        <single-notice :title="'北京旋极信息技术集团人才招...'" :time="'2018-04-28'"
                       :link="xuanjiUrl"></single-notice>
        <single-notice :title="'大赛新增开发者测试B组'" :time="'2018-04-12'"
                       :link="'http://mooctest.org/#/NewProgress'"></single-notice>
        <single-notice :title="'2018大赛正式开放报名'" :time="'2018-04-09'"
                       :link="'http://www.mooctest.net/contest/list'"></single-notice>
        <single-notice :title="'大赛新增AI系统测试分项'" :time="'2018-04-02'"
                       :link="'http://mooctest.org/#/NewProgress'"></single-notice>
        <single-notice :title="'西南科技大学人才招聘公告'" :time="'2018-03-30'"
                       :link="xinankejiUrl"></single-notice>
        <single-notice :title="'2018大赛安排公布'" :time="'2018-03-10'"
                       :link="'http://mooctest.org/#/Routine'"></single-notice>
        <single-notice :title="'2018大赛论坛火热开启'" :time="'2018-03-10'"
                       :link="'http://forum.mooctest.net/'"></single-notice>
        <single-notice :title="'2018北美赛圆满落幕'" :time="'2018-01-28'"
                       :link="'http://mooctest.org/#/American2018'"></single-notice>
        <single-notice :title="'2017大赛IEEE新闻'" :time="'2017-11-30'"
                       :link="'http://rs.ieee.org/images/files/newsletters/2017/3_2017/d_RSnews/SWTestingContest.html'"></single-notice>
      </div>
    </div>
  </div>
</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import {router} from '../../main'
  import SingleNotice from '../Index/SingleNotice.vue'
  import xinankejiPdf from '../../assets/pdf/xinankeji.pdf'
  import xuanjiPdf from '../../assets/pdf/xuanji.pdf'
  import countryPdf from '../../assets/pdf/country.pdf'
  import jiechuPdf from '../../assets/pdf/jiechu.pdf'

  export default {
    name: 'notice',
    components: {
      DivHeader,
      SingleNotice
    },
    data() {
      return {
        xinankejiUrl: xinankejiPdf,
        xuanjiUrl: xuanjiPdf,
        countryUrl: countryPdf,
        jiechuUrl: jiechuPdf
      }
    },
    methods: {}
  }
</script>

<style scoped src="./Notice.css"></style>
