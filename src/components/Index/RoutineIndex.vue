<template>

  <div class="index-wrapper">
    <div-header :header="'大赛日程'"></div-header>

    <div>
      <el-steps :active="0" align-center>
        <el-step title="大赛报名" description="登录mooctest.net填写报名信息 安装工具 调试环境 赛前练习" icon="el-icon-edit"></el-step>
        <el-step title="夏季/秋季预选赛" description="6月/10月" icon="el-icon-document"></el-step>
        <el-step title="分区决赛" description="10月 获取分区赛证书和奖金" icon="el-icon-location-outline"></el-step>
        <el-step title="总决赛" description="10月 获取总决赛证书和奖金" icon="el-icon-star-off"></el-step>
      </el-steps>
    </div>

  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import {Steps, Step} from 'element-ui'

  export default {
    name: 'sub-index',
    components: {
      DivHeader,
      elSteps: Steps,
      elStep: Step,
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./Index.css"></style>
