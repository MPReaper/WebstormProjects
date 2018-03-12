<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <div class="sub-wrapper">
          <div-header :header="'夏季预选赛和秋季预选赛'"></div-header>

          <button class="sub-title">
            比赛内容
          </button>

          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;登录<a target="_blank"
                                                       :href="'http://www.mooctest.net/contest/list'">慕测平台</a>，报名“2018年大学生嵌入式测试大赛”，在慕测WebIDE或者客户端完成ETest测试脚本，在比赛前完成“我的任务”中的“2018嵌入式测试资格练习”并达到规定分数。
            </p>
          </div>

          <button class="sub-title">
            评分标准
          </button>

          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 评分标准1：测试脚本的需求覆盖率；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 评分标准2：测试脚本的Bug检测率；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 评分标准1和2进行加权累计得该题总分；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 总分相同则按最后提交时间二次排序，早提交者优先。
            </p>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <div class="sub-wrapper">
          <div-header :header="'省区赛'"></div-header>

          <button class="sub-title">
            比赛内容
          </button>

          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;组委会提供基于互联网的模拟嵌入式测试任务，对模拟嵌入式应用程序进行基于工具的自动化黑盒测试，在慕测WebIDE或者客户端完成ETest测试脚本。
            </p>
          </div>

          <button class="sub-title">
            评分标准
          </button>

          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 评分标准1：测试脚本的需求覆盖率；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 评分标准2：测试脚本的Bug检测率；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 评分标准1和2进行加权累计得该题总分；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 总分相同则按最后提交时间二次排序，早提交者优先。
            </p>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <div class="sub-wrapper">
          <div-header :header="'总决赛'"></div-header>
          <button class="sub-title">
            比赛内容
          </button>

          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总决赛现场仍使用ETest作为测试环境，被测件为嵌入式教学工具箱中的嵌入式软件，比赛过程中使用组委会配发电脑，不得私自外接各类设备，选手可自带笔记本以参考相关资料。
            </p>
          </div>

          <button class="sub-title">
            评分标准
          </button>

          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 评分标准1：测试脚本的Bug检测率；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 评分标准2：测试脚本及测试数据质量评价；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 评分标准1和2进行加权累计得该题总分；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 总分相同选手根据最后一次提交时间二次排名。
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
    name: 'embed',
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
