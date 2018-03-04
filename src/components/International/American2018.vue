<template>

  <div>
    <div class="international-wrapper">

      <div-header :header="'2018北美赛'"></div-header>

      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="words-wrapper">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2018年1月27日，2018软件测试大赛在北美赛区率先拉开序幕。大赛在达拉斯与IEEE Reliability Society共同举办了第二届IEEE International Software Testing Contest。此次比赛分为大学生组和高中生组，报名人数共190人，主要来自达拉斯当地及周边的一些大学生及高中生。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;达拉斯当地时间早上9:30，学生早早地来排队注册报名，场面十分火爆。早上10:00-11:30，首先对所有参赛学生进行了培训，并指导安装了比赛环境。当地时间中午12:15-15:50，正式开始比赛，选手们开始了激烈的角逐。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最终，来自德克萨斯大学-达拉斯分校Micro Deniz技高一筹，夺得大学生组的桂冠。而中学组的冠军，则是一名年仅16岁，达拉斯当地的一名中学生Jonathan Browne，小小年纪已经在github上开源了20+多项目了（https://github.com/JBYoshi）。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本次比赛由IEEE International Software Testing Contest由IEEE Reliability Society官方颁发证书。这次北美赛的开幕，标志着我国软件比赛国际化又向前迈进了一步，推动了全球软件测试人才培养。
          </p>
        </div>
      </el-col>

      <div class="american-photo-wrapper hidden-md-and-down"
           :style="{ backgroundImage: 'url(' + photoUrl + ')' }"></div>
    </div>
  </div>
</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import {Col} from 'element-ui'

  export default {
    name: 'american',
    components: {
      DivHeader,
      elCol: Col
    },
    data() {
      return {
        photoUrl: require('../../assets/img/american.jpeg')
      }
    },
    methods: {}
  }
</script>

<style scoped src="./International.css"></style>
