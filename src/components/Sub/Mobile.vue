<template>
  <div>
    <div class="sub-wrapper">
      <div-header :header="'夏季预选赛和秋季预选赛'"></div-header>

      <button class="sub-title">
        比赛内容
      </button>

      <div class="sub-content">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;登录<a target="_blank"
                                                   :href="'http://www.mooctest.net/contest/list'">慕测平台</a>，报名“2018年大学生移动应用测试大赛”，报名“2018年大学生移动应用测试大赛”，直接采用慕测WebIDE或者下载安装Eclipse客户端，在比赛前完成“我的任务”中的“2018移动应用测试资格练习”并达到规定分数。
        </p>
      </div>

      <button class="sub-title">
        评分标准
      </button>

      <div class="sub-content">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 预选赛发布两道题，每道题计算Appium脚本的测试需求对象覆盖率，即在需求范围内，覆盖对象数/总对象数*100，两道题相加得总分；
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 覆盖总分相同，则两道题测试脚本运行时间相加进行二次排序（短优先）；
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 运行时间相同，则按Appium脚本的运行稳定性进行三次排序。
        </p>
      </div>
    </div>

    <div class="sub-wrapper">
      <div-header :header="'省区赛'"></div-header>

      <button class="sub-title">
        比赛内容
      </button>

      <div class="sub-content">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;组委会提供来自企业的待测移动应用和测试需求，在慕测的WebIDE或者Eclipse客户端完成Appium测试脚本。
        </p>
      </div>

      <button class="sub-title">
        评分标准
      </button>

      <div class="sub-content">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 省区赛发布两道题，每道题计算Appium脚本的测试需求对象覆盖率，即在需求范围内，覆盖对象数/总对象数*100，两道题相加得总分；
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 覆盖总分相同，则两道题测试脚本运行时间相加进行二次排序（短优先）；
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 运行时间相同，则按Appium脚本的运行稳定性进行三次排序
        </p>
      </div>
    </div>

    <div class="sub-wrapper">
      <div-header :header="'总决赛'"></div-header>
      <button class="sub-title">
        比赛内容
      </button>

      <div class="sub-content">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;组委会提供来自企业的待测移动应用和测试需求，在慕测的WebIDE或者Eclipse客户端完成Appium测试脚本，在慕测平台完成众包测试。
        </p>
      </div>

      <button class="sub-title">
        评分标准
      </button>

      <div class="sub-content">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 评分标准1：Appium脚本的测试需求覆盖率；
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 评分标准2：众包测试的Bug检测率，具体参阅题目要求；
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 评分标准1和2加权累计得该题分数，具体参阅题目要求；
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 总分相同的选手按Appium脚本运行时间二次排名，短则优。
        </p>
      </div>
    </div>
  </div>
</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import {router} from '../../main'

  export default {
    name: 'mobile',
    components: {
      DivHeader
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./Sub.css"></style>
