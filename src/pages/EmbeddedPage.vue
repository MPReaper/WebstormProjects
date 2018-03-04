<template>
  <div class="body-wrapper">
    <layout>

      <div class="container" id="top">
        <embedded-title></embedded-title>
        <embedded></embedded>
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
  import Embedded from '../components/Sub/Embedded.vue'
  import EmbeddedTitle from '../components/Sub/EmbeddedTitle.vue'
  import {router} from '../main'

  export default {
    name: 'developer-page',
    components: {
      Layout,
      Embedded,
      EmbeddedTitle
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
