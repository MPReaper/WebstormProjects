<template>

  <div class="index-wrapper">
    <div-header :header="'重要提示'"></div-header>
    <div>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 安排夏季（6月）和秋季（10月）两次预选赛，分两批次确定区决赛人选。夏季预选赛未入选分区决赛的选手可以再次参加秋季预选赛。报名截止为预选赛开赛前。</p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 请各位学生在正式比赛前完成相应资格练习（慕测平台-任务列表）以获得比赛资格。资格练习主要是促进学生熟悉比赛环境和比赛流程，提高比赛质量。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 为方便教师对本校学生组织额外赛前练习，慕测平台对所有教师开放测试案例库和练习考试功能，请注册教师账号后按照邮件说明返回用户使用函。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 指导教师可发邮件至（admin@mooctest.net）申请实时监控自己学生的练习和比赛成绩，并可以下载所有测试数据供教学与科研使用，建议教师将预选赛成绩作为课程参考分数或部分分数。
      </p>
    </div>

  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'

  export default {
    name: 'sub-index',
    components: {
      DivHeader
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./Index.css"></style>
