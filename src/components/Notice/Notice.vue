<template>
  <div>
    <div class="notice-wrapper">
      <div-header :header="'大赛焦点'"></div-header>
      <div class="main-notice-wrapper">
        <single-notice :title="'2018大赛安排公布'" :time="'2018-03-05'"
                       :link="'http://106.14.14.255/#/Routine'"></single-notice>
        <single-notice :title="'2018大赛报名通道正式开启'" :time="'2018-03-05'"
                       :link="'http://www.mooctest.net/contest/list'"></single-notice>
        <single-notice :title="'2018大赛论坛火热开启'" :time="'2018-03-05'"
                       :link="'http://forum.mooctest.net/'"></single-notice>
        <single-notice :title="'2018北美赛圆满落幕'" :time="'2018-01-28'"
                       :link="'http://106.14.14.255/#/American2018'"></single-notice>
      </div>
    </div>
  </div>
</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import {router} from '../../main'
  import SingleNotice from '../Index/SingleNotice.vue'

  export default {
    name: 'notice',
    components: {
      DivHeader,
      SingleNotice
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./Notice.css"></style>
