<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="one-col-sub-wrapper">
          <div-header :header="'邀请赛'"></div-header>

          <button class="sub-title">
            比赛内容
          </button>

          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;登录<a target="_blank"
                                                       :href="'http://www.mooctest.net/contest/list'">慕测平台</a>，报名<b>“2018年大学生AI系统测试大赛”</b>，直接采用慕测WebIDE和相关表单页面，针对原始深度学习模型或者变异模型（含Bug）进行测试选择或者测试生成。
            </p>
          </div>

          <button class="sub-title">
            评分标准
          </button>

          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 评分标准1：变异模型检测率，每个计1分；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 得分相同者按比赛尝试次数/时间进行二次排序；时间短者优先。
            </p>
          </div>

          <button class="sub-title">
            注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;意
          </button>
          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 开发者测试大赛<b>A组（在校大学生）</b>、<b>B组（高职高专学生）</b>均可报名。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 学生赛前技能准备：了解深度学习基本知识和常用模型；熟悉TensorFlow使用和常用Python编程；了解常用对抗分析方法。
            </p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import {Col, Row} from 'element-ui'
  import {router} from '../../main'

  export default {
    name: 'developer',
    components: {
      DivHeader,
      elCol: Col,
      elRow: Row
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./Sub.css"></style>
