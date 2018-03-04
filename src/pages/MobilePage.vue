<template>
  <div class="body-wrapper">
    <layout>

      <div class="container">
        <mobile-title></mobile-title>
        <mobile></mobile>
      </div>
    </layout>


    <div class="up-to-top-button el-icon-arrow-up" @click="goToTop">
    </div>

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
