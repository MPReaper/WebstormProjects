<template>
  <div class="body-wrapper">
    <layout>

      <div class="container">
        <web-title></web-title>
        <web></web>
      </div>
    </layout>

    <sign-button></sign-button>
    <!--<top-button></top-button>-->

  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import Web from '../components/Sub/Web.vue'
  import WebTitle from '../components/Sub/WebTitle.vue'
  import {router} from '../main'
  import SignButton from "../components/Util/SignButton.vue";
  import TopButton from "../components/Util/TopButton.vue";

  export default {
    name: 'web-page',
    components: {
      SignButton,
      TopButton,
      Layout,
      Web,
      WebTitle
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
