<template>

  <div>

    <div class="international-wrapper">
      <div-header :header="'2018欧洲赛'"></div-header>

      <!--<div class="european-photo-wrapper hidden-md-and-down"-->
      <!--:style="{ backgroundImage: 'url(' + photoUrl + ')' }"></div>-->

      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="words-wrapper">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2018年欧洲 赛将于7月16日-18日举行，敬请期待！
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>> 查看2018年大赛<span @click="goToRoutinePage">赛程安排</span>
            <br><br><br><br>
          </p>

        </div>
      </el-col>
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
        photoUrl: require('../../assets/img/european.jpeg')
      }
    },
    methods: {
      goToRoutinePage() {
        router.push({name: 'RoutinePage'})
      }
    }
  }
</script>

<style scoped src="./International.css"></style>
