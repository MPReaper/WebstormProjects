<template>
  <div>
    <div class="certificate-wrapper">

      <table class="certificate-table">
        <tbody>
        <tr>
          <td colspan="6">
            <button class="sub-title" id="developer">
              开发者测试（个人）
            </button>
          </td>
        </tr>
        </tbody>
      </table>

      <table class="certificate-table">
        <thead>
        <tr>
          <th>姓名</th>
          <th>成绩</th>
          <th>区域</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>梁家铭</td>
          <td>91.7353103029751</td>
          <td>江苏</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="left-certificate-wrapper hidden-xs-only">
      <ul>
        <b>2017年</b>
        <li @click="goToSub('#developer')">开发者测试</li>
        <li @click="goToSub('#person-mobile')">移动应用测试 (个人)</li>
        <li @click="goToSub('#security')">Web安全测试</li>
        <li @click="goToSub('#embedded')">嵌入式测试</li>
        <li @click="goToSub('#team-mobile')">移动应用测试 (团队)</li>
        <li @click="goToSub('#web')">Web应用测试</li>

        <b>2016年</b>
        <li @click="goToSub('#developer2016')">开发者测试</li>
        <li @click="goToSub('#mobile2016')">移动应用测试</li>
        <li @click="goToSub('#embedded2016')">嵌入式测试</li>
      </ul>
    </div>
  </div>
</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import {router} from '../../main'

  export default {
    name: 'certificate',
    components: {
      DivHeader
    },
    data() {
      return {}
    },
    methods: {
      goToSub(sub) {
        $("html, body").animate({scrollTop: $(sub).offset().top - 140}, 500);
      }
    }
  }
</script>

<style scoped src="./Certificate.css"></style>
