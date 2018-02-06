<template>

  <div class="single-sub-index-wrapper">

    <el-col :xs="8" :sm="8" :md="4" :lg="4" :xl="4">
      <div class="single-intro" @click="goToDetailPage">
        <div class="img-wrapper" :style="{ backgroundImage: 'url(' + photoUrl + ')' }">

        </div>
        <div class="name">{{name}}</div>
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
    props: ['photoName', 'name', 'intro', 'link'],
    data() {
      let name = this.photoName;
      return {
        photoUrl: require('../../assets/img/' + name),
      }
    },
    methods: {
      goToDetailPage() {
        router.push({name: this.link})
      }
    }
  }
</script>

<style scoped src="./SingleSubIndex.css"></style>
