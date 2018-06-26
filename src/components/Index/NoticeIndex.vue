<template>

  <div class="notice-wrapper">

    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
      <div class="notice-left-wrapper hidden-xs-only">
        <div-header :header="'大赛焦点'"></div-header>
        <single-notice :title="'[提醒] 获得下一轮比赛资格的同学上传学生证明'" :time="'2018-06-26'"
                       :link="'http://www.mooctest.net/user/info'"></single-notice>
        <single-notice :title="'夏季预选赛入选资格和分数查询'" :time="'2018-06-26'"
                       :link="'http://mooctest.org/#/NewProgress'"></single-notice>
        <single-notice :title="'2018全国大学生软件测试大赛师资培训班 [Web与移动应用]'" :time="'2018-06-12'"
                       :link="'http://www.mooctest.org/#/TeacherTrain'"></single-notice>
        <single-notice :title="'软件测试国际邀请赛系列发布'" :time="'2018-06-05'"
                       :link="'http://mooctest.org/#/International'"></single-notice>
        <button class="more-button" @click="goToNoticePage">查看更多</button>
      </div>

      <div class="notice-left-wrapper hidden-sm-and-up">
        <div-header :header="'大赛焦点'"></div-header>
        <single-notice :title="'[提醒] 获得资格的同学上传证明'" :time="'2018-06-26'"
                       :link="'http://www.mooctest.net/user/info'"></single-notice>
        <single-notice :title="'夏季预选赛入选资格和分数查询'" :time="'2018-06-26'"
                       :link="'http://mooctest.org/#/NewProgress'"></single-notice>
        <single-notice :title="'大赛师资培训班 [Web与移动应用]'" :time="'2018-06-12'"
                       :link="'http://www.mooctest.org/#/TeacherTrain'"></single-notice>
        <single-notice :title="'软件测试国际邀请赛系列发布'" :time="'2018-06-05'"
                       :link="'http://mooctest.org/#/International'"></single-notice>
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
