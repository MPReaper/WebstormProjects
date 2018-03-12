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
                                                       :href="'http://www.mooctest.net/contest/list'">慕测平台</a>，报名<b>“2018年大学生Web应用测试大赛”</b>，直接采用慕测WebIDE或者下载安装<a
              target="_blank"
              :href="'http://www.mooctest.net/download'">Eclipse客户端</a>，在比赛前完成“我的任务”中的<b>“2018Web应用测试资格练习”</b>并达到规定分数。
            </p>
          </div>

          <button class="sub-title">
            评分标准
          </button>

          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 评分标准1：Selenium脚本的测试需求覆盖率以及成功回放率；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 评分标准2：Jmeter性能测试脚本的场景设置和参数设定准确性以及成功回放率；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 各题分数累加合计总分；
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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;组委会提供来自开源社区或企业的待测Web应用和测试需求，在慕测WebIDE或者<a
              target="_blank"
              :href="'http://www.mooctest.net/download'">Eclipse客户端</a>完成Selenium和Jmeter测试脚本。
            </p>
          </div>

          <button class="sub-title">
            评分标准
          </button>

          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 评分标准1：Selenium脚本的测试需求覆盖率以及成功回放率；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 评分标准2：Jmeter性能测试脚本的场景设置和参数设定准确性以及成功回放率；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 各题分数累加合计总分；
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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;组委会提供来自开源社区或企业的待测Web应用和测试需求，在慕测WebIDE或者<a
              target="_blank"
              :href="'http://www.mooctest.net/download'">Eclipse客户端</a>完成Selenium和Jmeter测试脚本，在慕测平台完成众包测试。
            </p>
          </div>

          <button class="sub-title">
            评分标准
          </button>

          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 评分标准1：加权分支覆盖率（50%），覆盖分支数/总分支数*50；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 评分标准2：加权Bug检测率（50%），Bug杀死数/Bug总数*50；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 评分标准3：Web应用的Bug（功能和性能）Bug检测率；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 比赛为两道题，两道题分数加权累计得总分；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. 总分相同的选手按测试用例集运行时间二次排名，运行时间短优先。
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
    name: 'web',
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
