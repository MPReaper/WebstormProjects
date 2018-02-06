<template>

  <div class="single-intro-card-wrapper">

    <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
      <div class="single-intro">
        <div class="img-wrapper" :style="{ backgroundImage: 'url(' + photoUrl + ')' }">
        </div>
        <div class="intro">{{intro}}</div>
      </div>
    </el-col>

  </div>


</template>

<script>

  import {Col} from 'element-ui'
  import {router} from '../../main'

  export default {
    name: 'single-sub-index',
    components: {
      elCol: Col
    },
    props: ['photoName', 'intro'],
    data() {
      let name = this.photoName;
      return {
        photoUrl: require('../../assets/img/' + name),
      }
    },
    methods: {}
  }
</script>

<style scoped src="./SingleIntroCard.css"></style>
