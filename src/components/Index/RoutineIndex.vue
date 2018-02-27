<template>

  <div class="index-wrapper">
    <div-header :header="'赛程计划'"></div-header>

    <div class="routine-wrapper">
      <el-steps :active="0" align-center>
        <el-step title="大赛启动" description="3月12日" icon="el-icon-edit"></el-step>
        <el-step title="互联网夏季预选赛" description="6月9日-10日" icon="el-icon-document"></el-step>
        <el-step title="互联网秋季预选赛" description="11月3日-4日" icon="el-icon-document"></el-step>
        <el-step title="互联网+现场省赛" description="11月10日-11日" icon="el-icon-location-outline"></el-step>
        <el-step title="现场总决赛" description="11月24日-25日" icon="el-icon-star-off"></el-step>
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
