<template>
  <div class="body-wrapper">
    <layout>

      <div class="container" id="top">
        <security-title></security-title>
        <security></security>
      </div>
    </layout>

    <a href="#top">
      <div class="up-to-top-button el-icon-arrow-up">
      </div>
    </a>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import Security from '../components/Sub/Security.vue'
  import SecurityTitle from '../components/Sub/SecurityTitle.vue'
  import {router} from '../main'

  export default {
    name: 'security-page',
    components: {
      Layout,
      Security,
      SecurityTitle
    },
    data() {
      return {}
    },
    mounted() {

    },
    methods: {}
  }
</script>

<style scoped src="./Page.css"></style>
