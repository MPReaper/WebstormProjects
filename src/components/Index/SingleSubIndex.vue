<template>

  <div class="single-sub" @click="goToDetailPage">

    <!--pc-->
    <!--<div class="hidden-xs-only">-->
    <!--<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
    <!--<div class="img-wrapper"-->
    <!--:style="{ backgroundImage: 'url(' + photoUrl + ')' }">-->
    <!--</div>-->
    <!--<div class="name">{{name}}</div>-->
    <!--<div class="intro">{{intro}}</div>-->
    <!--</el-col>-->
    <!--</div>-->

    <!--phone-->
    <!--<div class="hidden-sm-and-up">-->
    <div>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="phone-wrapper">
          <span class="phone-name">{{name}}</span>
          <!--<span class="phone-intro">{{intro}}</span>-->
        </div>
      </el-col>
    </div>

  </div>

</template>

<script>

  import {router} from '../../main'
  import {Col} from 'element-ui'

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
