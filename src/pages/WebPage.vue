<template>
  <div class="body-wrapper">
    <layout>

      <div class="container" id="top">
        <web-title></web-title>
        <web></web>
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
  import Web from '../components/Sub/Web.vue'
  import WebTitle from '../components/Sub/WebTitle.vue'
  import {router} from '../main'

  export default {
    name: 'web-page',
    components: {
      Layout,
      Web,
      WebTitle
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
