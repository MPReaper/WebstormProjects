<template>
  <div class="body-wrapper">
    <layout>

      <div class="container">
        <developer-title></developer-title>
        <developer></developer>
      </div>
    </layout>

    <sign-button></sign-button>
    <top-button></top-button>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import Developer from '../components/Sub/Developer.vue'
  import DeveloperTitle from '../components/Sub/DeveloperTitle.vue'
  import {router} from '../main'
  import SignButton from "../components/Util/SignButton.vue";
  import TopButton from "../components/Util/TopButton.vue";

  export default {
    name: 'developer-page',
    components: {
      SignButton,
      TopButton,
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
      }
    }
  }
</script>

<style scoped src="./Page.css"></style>
