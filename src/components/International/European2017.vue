<template>

  <div>

    <div class="international-wrapper">

      <div-header :header="'2017欧洲赛'"></div-header>

      <el-carousel class="carousel photo-wrapper hidden-md-and-down" height="245px">
        <el-carousel-item :style="{ backgroundImage: 'url(' + photoUrl1 + ')' }"></el-carousel-item>
        <el-carousel-item :style="{ backgroundImage: 'url(' + photoUrl2 + ')' }"></el-carousel-item>
        <el-carousel-item :style="{ backgroundImage: 'url(' + photoUrl3 + ')' }"></el-carousel-item>
        <el-carousel-item :style="{ backgroundImage: 'url(' + photoUrl4 + ')' }"></el-carousel-item>
      </el-carousel>

      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="words-wrapper">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;教育部软件工程专业教学指导委员会、中国计算机学会软件工程专业委员会、中国软件测评机构联盟、中国计算机学会系统软件专业委员会和中国计算机学会容错计算专业委员会于2016年联合举办了首届“全国大学生软件测试大赛”，吸引了全国300余所大学的近4000名学生参赛。2016年全国软件测试大赛得到了IEEE Reliability Society的高度关注。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2017年7月25日，大赛在布拉格与国际软件质量大会（QRS）共同举办了首届IEEE International Software Testing Contest。比赛吸引了来自美国、德国、加拿大、瑞士、奥地利、捷克等12个国家的近30名选手。捷克科技大学Jan Motl（博士生）技高一筹，赢得冠军大奖。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了促进国际交流、HPI研究院全额资助了2017全国大学生开发者测试夏季预选赛前三名同学（大连理工大学-李强、广州大学-李文浚、苏州大学-徐悠然），奔赴欧洲参加了此次比赛，分别获得了第7名、第4名、第5名的好成绩。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本次比赛由IEEE Reliability Society官方颁发证书。此次比赛，迈出了我国软件比赛国际化的重要一步，推动了全球软件测试人才培养。
          </p>
        </div>
      </el-col>
    </div>

    <div class="international-wrapper">

      <div-header :header="'相关链接'"></div-header>

      <div>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>> <span @click="goToLink">2017欧洲邀请赛详情</span>
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
  import {Col, Carousel, CarouselItem} from 'element-ui'

  export default {
    name: 'european',
    components: {
      DivHeader,
      elCol: Col,
      elCarousel: Carousel,
      elCarouselItem: CarouselItem
    },
    data() {
      return {
        photoUrl1: require('../../assets/img/european2017-1.jpeg'),
        photoUrl2: require('../../assets/img/european2017-2.jpg'),
        photoUrl3: require('../../assets/img/european2017-3.jpg'),
        photoUrl4: require('../../assets/img/european2017-4.jpg'),
        fileUrl: require('../../assets/img/european2017.png')
      }
    },
    methods: {
      goToLink() {
        window.location.href = ' http://paris.utdallas.edu/qrs17/'
      }
    }
  }
</script>

<style scoped src="./International.css"></style>
