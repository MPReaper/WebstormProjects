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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6月10日8:00-12:00
            </p>
          </div>
          <button class="sub-title">
            比赛内容
          </button>

          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;组委会提供嵌入式系统的测试任务，采用<b>模拟嵌入式应用软件</b>作为被测件，参赛选手在<a target="_blank"
                                                                              :href="'http://www.mooctest.net/contest/list'">慕测平台</a>下载被测件、测试要求及测试工具ETest，使用ETest进行测试，按规定要求提交测试结果。
            </p>
          </div>

          <button class="sub-title">
            评分标准
          </button>

          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 预选赛、省赛、决赛各发布一道题，预埋问题难度占比：易（50%）、中（30%）、难（20%）；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 进行检错率评价：按照选手发现问题的个数及相应难度进行评分；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 如评分结果相等，按提交时间先后排序。
            </p>
          </div>

          <button class="sub-title">
            注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;意
          </button>
          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;嵌入式测试大赛仅限<b>A组（在校大学生）</b>报名。
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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;组委会提供嵌入式系统的测试任务，采用<b>模拟嵌入式应用软件</b>作为被测件，参赛选手在<a target="_blank"
                                                                                                                  :href="'http://www.mooctest.net/contest/list'">慕测平台</a>下载被测件、测试要求及测试工具ETest，使用ETest进行测试，按规定要求提交测试结果。
            </p>
          </div>

          <button class="sub-title">
            评分标准
          </button>

          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 预选赛、省赛、决赛各发布一道题，预埋问题难度占比：易（50%）、中（30%）、难（20%）；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 进行检错率评价：按照选手发现问题的个数及相应难度进行评分；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 如评分结果相等，按提交时间先后排序。
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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;组委会提供嵌入式系统的测试任务，采用<b>真实嵌入式系统</b>作为被测件，参赛选手在<a target="_blank"
                                                                                                                  :href="'http://www.mooctest.net/contest/list'">慕测平台</a>下载被测件、测试要求及测试工具ETest，使用ETest进行测试，按规定要求提交测试结果。
            </p>
          </div>

          <button class="sub-title">
            评分标准
          </button>

          <div class="sub-content">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 预选赛、省赛、决赛各发布一道题，预埋问题难度占比：易（50%）、中（30%）、难（20%）；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 检错率评价：按照选手发现问题的个数及相应难度进行评分；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 进行检错率评价、测试数据和测试脚本覆盖率评价；
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 如评分结果相等，按提交时间先后排序。
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
