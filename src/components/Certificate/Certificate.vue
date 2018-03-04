<template>
  <div>
    <div class="certificate-wrapper">

      <certificate2017></certificate2017>

    </div>

    <div class="left-certificate-wrapper">
      <ul>
        <b>2017年</b>

        <li @click="goToSub('.developer')">开发者测试</li>
        <li @click="goToSub('.person-mobile')">移动应用测试 (个人)</li>
        <li @click="goToSub('.security')">Web安全测试</li>
        <li @click="goToSub('.embedded')">嵌入式测试</li>
        <li @click="goToSub('.team-mobile')">移动应用测试 (团队)</li>
        <li @click="goToSub('.web')">Web应用测试</li>
      </ul>
    </div>
  </div>
</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import Certificate2017 from './Certificate2017.vue'
  import {router} from '../../main'

  export default {
    name: 'certificate',
    components: {
      DivHeader,
      Certificate2017
    },
    data() {
      return {}
    },
    methods: {
      goToSub(sub) {
        const jump = document.querySelector(sub)
        // 获取需要滚动的距离
        let total = jump.offsetTop

        // Chrome
        document.body.scrollTop = total
        // Firefox
        document.documentElement.scrollTop = total
        // Safari
        window.pageYOffset = total
      }
    }
  }
</script>

<style scoped src="./Certificate.css"></style>
