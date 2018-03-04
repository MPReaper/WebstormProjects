<template>
  <div class="body-wrapper">
    <layout>

      <div class="container">
        <security-title></security-title>
        <security></security>
      </div>
    </layout>


    <div class="up-to-top-button el-icon-arrow-up" @click="goToTop">
    </div>

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
    created() {
      this.menu();
    },
    methods: {
      menu() {
        window.scrollTo(0, 0);
      },
      goToTop() {
        window.scrollTo(0, 0);
      }
    }
  }
</script>

<style scoped src="./Page.css"></style>
