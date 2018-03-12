<template>
  <div>
    <div class="index-wrapper hidden-sm-and-down">
      <div-header :header="'赛程计划'"></div-header>

      <button class="sub-title">
        国内赛程
      </button>
      <div class="routine-wrapper">
        <el-steps :active="0" align-center>
          <el-step title="大赛启动" description="3月12日" icon="el-icon-edit"></el-step>
          <el-step title="参与练习" description="4月-6月" icon="el-icon-tickets"></el-step>
          <el-step title="互联网夏季预选赛" description="6月9日-10日" icon="el-icon-document" @click="goToSummerIntro"></el-step>
          <el-step title="互联网秋季预选赛" description="11月3日-4日" icon="el-icon-document"></el-step>
          <el-step title="互联网+现场省赛" description="11月10日-11日" icon="el-icon-location-outline"></el-step>
          <el-step title="现场总决赛" description="11月24日-25日" icon="el-icon-star-off"></el-step>
        </el-steps>
      </div>

      <button class="sub-title">
        国际赛程
      </button>
      <div class="routine-wrapper">
        <el-steps :active="0" align-center>
          <el-step title="北美邀请赛" description="1月27日" icon="el-icon-edit-outline"></el-step>
          <el-step title="欧洲邀请赛" description="7月16日-18日" icon="el-icon-edit-outline"></el-step>
        </el-steps>
      </div>

    </div>

    <div class="index-wrapper hidden-md-and-up">
      <div-header :header="'赛程计划'"></div-header>

      <button class="sub-title">
        国内赛程
      </button>
      <div class="routine-wrapper">
        <el-steps :active="0" align-center direction="vertical">
          <el-step title="大赛启动" description="3月12日" icon="el-icon-edit"></el-step>
          <el-step title="参与练习" description="4月-6月" icon="el-icon-tickets"></el-step>
          <el-step title="互联网夏季预选赛" description="6月9日-10日" icon="el-icon-document"></el-step>
          <el-step title="互联网秋季预选赛" description="11月3日-4日" icon="el-icon-document"></el-step>
          <el-step title="互联网+现场省赛" description="11月10日-11日" icon="el-icon-location-outline"></el-step>
          <el-step title="现场总决赛" description="11月24日-25日" icon="el-icon-star-off"></el-step>
        </el-steps>
      </div>

      <button class="sub-title">
        国际赛程
      </button>
      <div class="routine-wrapper">
        <el-steps :active="0" align-center direction="vertical">
          <el-step title="北美邀请赛" description="1月27日" icon="el-icon-edit-outline"></el-step>
          <el-step title="欧洲邀请赛" description="7月16日-18日" icon="el-icon-edit-outline"></el-step>
        </el-steps>
      </div>
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
