<template>

  <div class="photo-wrapper">

    <el-carousel class="carousel" height="245px">
      <el-carousel-item :style="{ backgroundImage: 'url(' + bannerUrl1 + ')' }"></el-carousel-item>
      <el-carousel-item :style="{ backgroundImage: 'url(' + bannerUrl2 + ')' }"></el-carousel-item>
      <el-carousel-item :style="{ backgroundImage: 'url(' + bannerUrl3 + ')' }"></el-carousel-item>
      <el-carousel-item :style="{ backgroundImage: 'url(' + bannerUrl4 + ')' }"></el-carousel-item>
    </el-carousel>

  </div>

</template>

<script>

  import {Carousel, CarouselItem} from 'element-ui'

  export default {
    name: 'photo',
    components: {
      elCarousel: Carousel,
      elCarouselItem: CarouselItem
    },
    data() {
      return {
        bannerUrl1: require('../../assets/img/photo1.jpg'),
        bannerUrl2: require('../../assets/img/photo2.jpg'),
        bannerUrl3: require('../../assets/img/photo3.jpg'),
        bannerUrl4: require('../../assets/img/photo4.jpg')
      }
    },
    methods: {}
  }
</script>

<style scoped src="./Photo.css"></style>
