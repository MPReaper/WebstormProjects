<template>
  <div>
    <div class="notice-wrapper">
      <div-header :header="'国赛文件'"></div-header>
      <div class="main-notice-wrapper">
        <single-notice :title="'关于举办2018年全国大学生软件测试大赛的通知'" :time="'2018-04-28'"
                       :link="countryUrl"></single-notice>
      </div>
    </div>
  </div>
</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import {router} from '../../main'
  import SingleNotice from '../Index/SingleNotice.vue'
  import countryPdf from '../../assets/pdf/country.pdf'

  export default {
    name: 'article',
    components: {
      DivHeader,
      SingleNotice
    },
    data() {
      return {
        countryUrl: countryPdf
      }
    },
    methods: {}
  }
</script>

<style scoped src="./Notice.css"></style>
