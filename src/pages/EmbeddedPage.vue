<template>
  <div class="body-wrapper">
    <layout>

      <div class="container">
        <embedded-title></embedded-title>
        <embedded></embedded>
      </div>
    </layout>

    <sign-button></sign-button>
    <!--<top-button></top-button>-->

  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import Embedded from '../components/Sub/Embedded.vue'
  import EmbeddedTitle from '../components/Sub/EmbeddedTitle.vue'
  import {router} from '../main'
  import SignButton from "../components/Util/SignButton.vue";
  import TopButton from "../components/Util/TopButton.vue";

  export default {
    name: 'developer-page',
    components: {
      SignButton,
      TopButton,
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
