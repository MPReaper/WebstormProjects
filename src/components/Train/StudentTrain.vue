<template>
<div>
  <div class="train-wrapper">
    <div-header :header="'全国大学生软件测试大赛学生培训安排'"></div-header>
    <div>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2018大赛学生培训由大开科技协助提供。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.线下培训:单个赛项有20人参赛并参加培训，大开科技提供线下培训和指导；
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.在线指导:与大开科技签订测试大赛指导协议后，负责通过在线工具提供大赛支持和指导。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;具体信息请联系曹老师，电话：13910077365  微信:manokle
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a :href="peixunUrl" target="_blank">《全国大学生测试大赛培训指导协议》</a>
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 暑期教师培训另行通知。
      </p>
    </div>
  </div>

  <div class="train-wrapper">
    <div-header :header="'学生在线培训计划'"></div-header>
    <div>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大赛学生培训将在9月份开课，敬请关注官网通知。
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
</div>
</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import peixunPdf from '../../assets/pdf/peixun.pdf'

  export default {
    name: 'education',
    components: {
      DivHeader
    },
    data() {
      return {
        peixunUrl:peixunPdf
      }
    },
    methods: {}
  }
</script>

<style scoped src="./Train.css"></style>
