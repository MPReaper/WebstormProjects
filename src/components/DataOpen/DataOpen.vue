<template>

  <div>

    <div class="data-open-wrapper">
      <div-header :header="'数据开放计划'"></div-header>

      <div class="words-wrapper">
        <p>
          <!--&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-->
          数据开放计划
        </p>
      </div>
    </div>

    <div class="data-open-wrapper">
      <div-header :header="'Data Open'"></div-header>

      <div class="words-wrapper">
        <p class="english">
          Welcome to the national student Contest of Software Testing Data Repository (CSTDR). CSTDR is a database which contains numerous valuable testing data collected from software testing contests. This database can be used for research and empirical study, such as developing techniques for improving software testing efficiency and effectiveness through mining and analyzing testing behavior. We will make this database publicly accessible so that the whole community can benefit. After removing privacy-related information, the database will be published on our website.
        </p>
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
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./DataOpen.css"></style>
