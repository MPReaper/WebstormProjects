<template>

  <div class="train-wrapper">
    <div-header :header="'学生在线培训计划'"></div-header>
    <div>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大赛培训将在5月份开课，敬请关注官网通知。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 在线培训主要为短期（10课时左右）技术性培训，以测试脚本编写为主，不包含测试基础知识。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 培训视频由网易云课堂负责支撑运营；采用通用课程模式，随到随学。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 个人单门课程为99元，全部课程打包价格为199元。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 大学打包团购价格为1万元，人数原则上不超过200人。大学团购享受比赛的数据支持服务，包括学生练习/比赛成绩下载，测试结果打包下载等。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. 主要城市提供线下合作培训点咨询和技术服务。
      </p>
    </div>

  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'

  export default {
    name: 'education',
    components: {
      DivHeader
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./Train.css"></style>
