<template>
  <div>
    <div class="notice-wrapper">
      <div-header :header="'国赛文件'"></div-header>
      <div class="main-notice-wrapper">
        <single-notice :title="'关于举办2018年全国大学生软件测试大赛的通知'" :time="'2018-04-28'"
                       :link="countryUrl"></single-notice>
      </div>
    </div>

    <div class="notice-wrapper">
      <div-header :header="'省赛文件'"></div-header>
      <div class="main-notice-wrapper">
        <single-notice :title="'关于举办2018年全国大学生软件测试大赛江苏省赛的通知'" :time="'2018-04-29'"
                       :link="jiangsuUrl"></single-notice>
        <single-notice :title="'关于举办2018年全国大学生软件测试大赛重庆省赛的通知'" :time="'2018-04-29'"
                       :link="chongqingUrl"></single-notice>
        <single-notice :title="'关于举办2018年全国大学生软件测试大赛湖北省赛的通知'" :time="'2018-04-29'"
                       :link="hubeiUrl"></single-notice>
        <single-notice :title="'关于举办2018年全国大学生软件测试大赛广东省赛的通知'" :time="'2018-04-29'"
                       :link="guangdongUrl"></single-notice>
        <single-notice :title="'关于举办2018年全国大学生软件测试大赛福建省赛的通知'" :time="'2018-04-29'"
                       :link="fujianUrl"></single-notice>
        <single-notice :title="'关于举办2018年全国大学生软件测试大赛安徽省赛的通知'" :time="'2018-05-07'"
                       :link="anhuiUrl"></single-notice>
        <single-notice :title="'关于举办2018年全国大学生软件测试大赛陕西省赛的通知'" :time="'2018-05-07'"
                       :link="shanxiUrl"></single-notice>
        <single-notice :title="'关于举办2018年全国大学生软件测试大赛黑龙江省赛的通知'" :time="'2018-05-07'"
                       :link="heilongjiangUrl"></single-notice>
      </div>
    </div>
  </div>
</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import {router} from '../../main'
  import SingleNotice from '../Index/SingleNotice.vue'
  import countryPdf from '../../assets/pdf/country.pdf'
  import chongqingPdf from '../../assets/pdf/chongqing.pdf'
  import jiangsuPdf from '../../assets/pdf/jiangsu.pdf'
  import hubeiPdf from '../../assets/pdf/hubei.pdf'
  import guangdongPdf from '../../assets/pdf/guangdong.pdf'
  import fujianPdf from '../../assets/pdf/fujian.pdf'
  import anhuiPdf from '../../assets/pdf/anhui.pdf'
  import shanxiPdf from '../../assets/pdf/shanxi.pdf'
  import heilongjiangPdf from '../../assets/pdf/heilongjiang.pdf'

  export default {
    name: 'article',
    components: {
      DivHeader,
      SingleNotice
    },
    data() {
      return {
        countryUrl: countryPdf,
        chongqingUrl: chongqingPdf,
        jiangsuUrl: jiangsuPdf,
        hubeiUrl: hubeiPdf,
        guangdongUrl: guangdongPdf,
        fujianUrl: fujianPdf,
        anhuiUrl: anhuiPdf,
        shanxiUrl: shanxiPdf,
        heilongjiangUrl: heilongjiangPdf
      }
    },
    methods: {}
  }
</script>

<style scoped src="./Notice.css"></style>
