<template>

  <div class="notice-wrapper">
    <div-header :header="'人才招聘'"></div-header>
    <div>
      <div class="main-notice-wrapper">
        <single-notice :title="'西南科技大学2018年度人才招聘公告'" :time="'2018-03-30'"
                       :link="xinankejiUrl"></single-notice>
      </div>
    </div>

  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import SingleNotice from '../Index/SingleNotice.vue'
  import xinankejiPdf from '../../assets/pdf/xinankeji.pdf'

  export default {
    name: 'education',
    components: {
      DivHeader,
      SingleNotice
    },
    data() {
      return {
        xinankejiUrl: xinankejiPdf
      }
    },
    methods: {}
  }
</script>

<style scoped src="./Employ.css"></style>
