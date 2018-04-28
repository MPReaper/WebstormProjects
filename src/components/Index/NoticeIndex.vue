<template>

  <div class="notice-wrapper">

    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
      <div class="notice-left-wrapper">
        <div-header :header="'大赛焦点'"></div-header>
        <single-notice :title="'关于举办2018年全国大学生软件测试大赛的通知'" :time="'2018-04-28'"
                       :link="countryUrl"></single-notice>
        <single-notice :title="'北京旋极信息技术集团人才招聘公告'" :time="'2018-04-28'"
                       :link="xuanjiUrl"></single-notice>
        <single-notice :title="'大赛新增开发者测试B组'" :time="'2018-04-12'"
                       :link="'http://mooctest.org/#/NewProgress'"></single-notice>
        <single-notice :title="'2018大赛正式开放报名'" :time="'2018-04-09'"
                       :link="'http://www.mooctest.net/contest/list'"></single-notice>

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
        countryUrl: countryPdf
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
