<template>
  <div class="body-wrapper">
    <layout>

      <div class="container" id="top">
        <mobile-title></mobile-title>
        <mobile></mobile>
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
  import Mobile from '../components/Sub/Mobile.vue'
  import MobileTitle from '../components/Sub/MobileTitle.vue'
  import {router} from '../main'

  export default {
    name: 'mobile-page',
    components: {
      Layout,
      Mobile,
      MobileTitle
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
