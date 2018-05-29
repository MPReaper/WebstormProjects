<template>
  <div class="body-wrapper">
    <layout>

      <div class="container">
        <AI-title></AI-title>
        <AI></AI>
      </div>
    </layout>

    <sign-button></sign-button>
    <!--<top-button></top-button>-->
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import AI from '../components/Sub/AI.vue'
  import AITitle from '../components/Sub/AITitle.vue'
  import {router} from '../main'
  import SignButton from "../components/Util/SignButton.vue";
  import TopButton from "../components/Util/TopButton.vue";

  export default {
    name: 'ai-page',
    components: {
      SignButton,
      TopButton,
      Layout,
      AI,
      AITitle
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
