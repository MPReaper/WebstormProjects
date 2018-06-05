<template>


  <div>

    <div>

      <div class="international-wrapper">
        <div-header :header="'2018南美赛'"></div-header>

        <!--<div class="european-photo-wrapper hidden-md-and-down"-->
        <!--:style="{ backgroundImage: 'url(' + photoUrl + ')' }"></div>-->

        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <div class="words-wrapper">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2018年南美 赛内容待定，敬请期待！
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>> 查看2018年大赛<span @click="goToRoutinePage">赛程安排</span>
              <br><br><br><br>
            </p>

          </div>
        </el-col>
      </div>
    </div>
  </div>
</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import {router} from '../../main'

  export default {
    name: 'american',
    components: {
      DivHeader
    },
    data() {
      return {

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
