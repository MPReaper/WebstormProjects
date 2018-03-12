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
                                                       :href="'http://www.mooctest.net/contest/list'">慕测平台</a>，报名<b>“2018年大学生Web安全测试大赛”</b>，在比赛前完成“我的任务”中的<b>“2018Web安全测试资格练习”</b>并达到规定分数。组委会提供一系列不同知识点的Web安全测试靶机，参赛选手通过解题获得相应题目中的flag（旗标文件），并提交至评分系统，评分系统审核确认flag正确后，将自动将积分传递给选手，以获得相应的分值。
            </p>
          </div>

          <button class="sub-title">
            评分标准
          </button>

          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 包含10道Web安全测试题目，难度占比简单(40%)、中等（30%）、困难（30%）；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 大部分flag为此形式:flag{可见字符串}，只需提交花括号内的可见字符串(大小写敏感)；如果 flag 为其他形式，题目中会单独说明；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 前三名解出题目的选手获得额外加分，分别为(题目分值*20%, 题目分值*10%,题目分值*5%)；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 当参赛选手积分相同时，先达到该分数的选手排名靠前。
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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;组委会提供一系列不同知识点的Web安全测试靶机，参赛选手通过解题获得相应题目中的flag（旗标文件），并提交至评分系统，评分系统审核确认flag正确后，将自动将积分传递给选手，以获得相应的分值。
            </p>
          </div>

          <button class="sub-title">
            评分标准
          </button>

          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 包含10道Web安全测试题目，难度占比简单(40%)、中等（30%）、困难（30%）；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 大部分flag为此形式:flag{可见字符串}，只需提交花括号内的可见字符串(大小写敏感)；如果 flag 为其他形式，题目中会单独说明；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 前三名解出题目的选手获得额外加分，分别为(题目分值*20%, 题目分值*10%,题目分值*5%)；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 当参赛选手积分相同时，先达到该分数的选手排名靠前。
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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总决赛现场提供目标靶机，选手使用自带电脑通过现场网络接口接入，可使用自身熟悉工具，但不得相互讨论或作弊，不得对服务器做出攻击行为。评分标准：根据赛题的得分点和得分时间综合计算。
            </p>
          </div>

          <button class="sub-title">
            评分标准
          </button>

          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据赛题的得分点和得分时间综合计算。
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
    name: 'security',
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
