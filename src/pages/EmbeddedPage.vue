<template>
  <div class="body-wrapper">
    <layout>

      <div class="container">
        <embedded-title></embedded-title>
        <embedded></embedded>
      </div>
    </layout>

    <div class="up-to-top-button el-icon-arrow-up" @click="goToTop">
    </div>

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
