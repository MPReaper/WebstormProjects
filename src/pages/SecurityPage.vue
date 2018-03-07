<template>
  <div class="body-wrapper">
    <layout>

      <div class="container">
        <security-title></security-title>
        <security></security>
      </div>
    </layout>

    <sign-button></sign-button>
    <top-button></top-button>

  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import Security from '../components/Sub/Security.vue'
  import SecurityTitle from '../components/Sub/SecurityTitle.vue'
  import {router} from '../main'
  import SignButton from "../components/Util/SignButton.vue";
  import TopButton from "../components/Util/TopButton.vue";

  export default {
    name: 'security-page',
    components: {
      SignButton,
      TopButton,
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
