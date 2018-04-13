<template>

  <div class="notice-wrapper">

    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
      <div class="notice-left-wrapper">
        <div-header :header="'大赛焦点'"></div-header>

        <single-notice :title="'大赛新增开发者测试B组'" :time="'2018-04-12'"
                       :link="'http://mooctest.org/#/NewProgress'"></single-notice>
        <single-notice :title="'2018大赛正式开放报名'" :time="'2018-04-09'"
                       :link="'http://www.mooctest.net/contest/list'"></single-notice>
        <single-notice :title="'大赛新增AI系统测试分项'" :time="'2018-04-02'"
                       :link="'http://mooctest.org/#/NewProgress'"></single-notice>
        <single-notice :title="'西南科技大学人才招聘公告'" :time="'2018-03-30'"
                       :link="xinankejiUrl"></single-notice>

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
        xinankejiUrl: xinankejiPdf
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
