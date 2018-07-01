<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <div class="sub-wrapper">
          <div-header :header="'夏季预选赛和秋季预选赛'"></div-header>

          <button class="sub-title">
            比赛时间
          </button>
          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6月9日9:00-12:00
            </p>
          </div>
          <button class="sub-title">
            比赛内容
          </button>

          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;登录<a target="_blank"
                                                       :href="'http://www.mooctest.net/contest/list'">慕测平台</a>，报名<b>“2018年大学生开发者测试大赛”</b>，直接采用慕测WebIDE或者下载安装<a
              target="_blank"
              :href="'http://www.mooctest.net/download'">Eclipse客户端</a>，在比赛前完成“我的任务”中的<b>“2018开发者测试资格练习”</b>并达到规定分数。
            </p>
          </div>

          <button class="sub-title">
            评分标准
          </button>

          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 评分标准1：分支覆盖率（50%），覆盖分支数/总分支数*50；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 评分标准2：Bug检测率（50%），Bug杀死数/Bug总数*50；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 比赛为两道题，两道题分数相加得总分；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 总分相同按测试用例集运行时间二次排名，运行时间短优先。
            </p>
          </div>

          <button class="sub-title">
            注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;意
          </button>
          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开发者测试大赛<b>A组（在校大学生）</b>、<b>B组（高职高专学生）</b>均可报名。
            </p>
          </div>

          <button class="sub-title">
            成绩公示
          </button>
          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;夏季预选赛<a :href="'http://mooctest.org/#/NewProgress'">成绩公示</a>与资格查询:
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="el-icon-download"></i> <a :href="SummerDeveloperPUrl">夏季预选赛开发者测试（个人）</a>
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="el-icon-download"></i> <a :href="SummerDeveloperGUrl">夏季预选赛开发者测试（团队）</a>
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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;组委会提供来自开源社区的Java程序代码，在慕测WebIDE或者<a
              target="_blank"
              :href="'http://www.mooctest.net/download'">Eclipse客户端</a>完成JUnit测试脚本。
            </p>
          </div>

          <button class="sub-title">
            评分标准
          </button>

          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 评分标准1：分支覆盖率（50%），覆盖分支数/总分支数*50；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 评分标准2：Bug检测率（50%），Bug杀死数/Bug总数*50；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 比赛为两道题，两道题分数相加得总分；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 总分相同按测试用例集运行时间二次排名，运行时间短优先。
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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;组委会提供来自开源社区的Java程序代码，在慕测WebIDE或者<a
              target="_blank"
              :href="'http://www.mooctest.net/download'">Eclipse客户端</a>完成JUnit测试脚本。
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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 比赛为两道题，两道题分数加权累计得总分；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 总分相同的选手按测试用例集运行时间二次排名，运行时间短优先。
            </p>
          </div>

          <button class="sub-title">
            备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注
          </button>
          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;评分标准1和2中的动态权重为(n/k)，其中n为该分区决赛参赛人数，k为该得分点（覆盖或者Bug）的得分人数，只计算k不为0的得分点。
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

  import SummerDeveloperPPdf from '../../assets/pdf/summer-developer-p.pdf'
  import SummerDeveloperGPdf from '../../assets/pdf/summer-developer-g.pdf'

  export default {
    name: 'developer',
    components: {
      DivHeader,
      elCol: Col,
      elRow: Row,
      SummerDeveloperPPdf,
      SummerDeveloperGPdf,
    },
    data() {
      return {}
    },
    methods: {
      SummerDeveloperPUrl: SummerDeveloperPPdf,
      SummerDeveloperGUrl: SummerDeveloperGPdf,
    }
  }
</script>

<style scoped src="./Sub.css"></style>
