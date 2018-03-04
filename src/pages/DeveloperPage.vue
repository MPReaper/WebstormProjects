<template>
  <div class="body-wrapper">
    <layout>

      <div class="container" id="top">
        <developer-title></developer-title>
        <developer></developer>
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
  import Developer from '../components/Sub/Developer.vue'
  import DeveloperTitle from '../components/Sub/DeveloperTitle.vue'
  import {router} from '../main'

  export default {
    name: 'developer-page',
    components: {
      Layout,
      Developer,
      DeveloperTitle
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
