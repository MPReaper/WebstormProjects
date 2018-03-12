<template>
  <div>
    <div class="index-wrapper">
      <div-header :header="'赛程计划'"></div-header>
      <div class="routine-wrapper" :style="{ backgroundImage: 'url(' + routineUrl + ')' }"></div>
    </div>
  </div>
</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import {Steps, Step} from 'element-ui'

  export default {
    name: 'sub-index',
    components: {
      DivHeader,
      elSteps: Steps,
      elStep: Step,
    },
    data() {
      return {
        routineUrl: require('../../assets/img/routine.png')
      }
    },
    methods: {}
  }
</script>

<style scoped src="./Index.css"></style>
