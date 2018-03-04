<template>
  <div class="body-wrapper">
    <layout>

      <div class="container">
        <developer-title></developer-title>
        <developer></developer>
      </div>
    </layout>


    <div class="up-to-top-button el-icon-arrow-up" @click="goToTop">
    </div>

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
