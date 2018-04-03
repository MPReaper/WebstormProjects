<template>

  <div class="education-wrapper">
    <div-header :header="'大赛最新进展'"></div-header>
    <div>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 分项赛新增深度学习测试。目前分项赛如下（A组为在校大学生，B组为高职高专学生）：
      </p>
      <table class="sub-list-table">
        <thead>
        <tr>
          <th></th>
          <th @click="goToDeveloperPage">"上海软件中心杯"开发者测试大赛</th>
          <th @click="goToMobilePage">"拓思杯"移动应用测试大赛</th>
          <th @click="goToEmbeddedPage">"凯云杯"嵌入式测试大赛</th>
          <th @click="goToWebPage">"虚席以待"Web应用测试大赛</th>
          <th @click="goToSecurityPage">"安恒杯"Web安全测试大赛</th>
          <th>"虚席以待"深度学习测试大赛</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>A组</td>
          <td><i class="el-icon-success"></i></td>
          <td><i class="el-icon-success"></i></td>
          <td><i class="el-icon-success"></i></td>
          <td></td>
          <td><i class="el-icon-success"></i></td>
          <td><i class="el-icon-success"></i></td>
        </tr>
        <tr>
          <td>B组</td>
          <td></td>
          <td><i class="el-icon-success"></i></td>
          <td></td>
          <td><i class="el-icon-success"></i></td>
          <td></td>
          <td><i class="el-icon-success"></i></td>
        </tr>
        </tbody>
      </table>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. <span class="href-span"
                                                     @click="goToRoutinePage">省赛承办申请</span>已经开始，相关事宜请联系<span
        class="href-span"
        @click="goToCommitteePage">大赛秘书处</span>。
      </p>
    </div>

  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import {router} from '../../main'

  export default {
    name: 'new-progress',
    components: {
      DivHeader
    },
    data() {
      return {}
    },
    methods: {
      goToRoutinePage() {
        router.push({name: 'RoutinePage'})
      },
      goToCommitteePage() {
        router.push({name: 'CommitteePage'})
      },
      goToDeveloperPage() {
        router.push({name: 'DeveloperPage'})
      },
      goToMobilePage() {
        router.push({name: 'MobilePage'})
      },
      goToWebPage() {
        router.push({name: 'WebPage'})
      },
      goToEmbeddedPage() {
        router.push({name: 'EmbeddedPage'})
      },
      goToSecurityPage() {
        router.push({name: 'SecurityPage'})
      }
    }
  }
</script>

<style scoped src="./NewProgress.css"></style>
