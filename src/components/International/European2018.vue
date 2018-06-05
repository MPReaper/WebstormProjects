<template>

  <div>


    <div class="international-wrapper">

      <div-header :header="'2018欧洲赛'"></div-header>

      <div>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>> <span @click="goToLink">2018欧洲邀请赛详情</span>
        </p>
        <br>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>> 2018欧洲邀请赛文件
        </p>
        <div class="file-wrapper" :style="{ backgroundImage: 'url(' + fileUrl + ')' }"></div>
      </div>

    </div>
  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import {Col} from 'element-ui'
  import {router} from '../../main'


  export default {
    name: 'european',
    components: {
      DivHeader,
      elCol: Col
    },
    data() {
      return {
        fileUrl: require('../../assets/img/samerican2018.jpg')
      }
      return {
//        photoUrl: require('../../assets/img/european.jpeg')
      }
    },
    methods: {
      goToLink() {
        window.location.href = 'http://paris.utdallas.edu/qrs18/contest.html'
      }

    }

  }
</script>

<style scoped src="./International.css"></style>
