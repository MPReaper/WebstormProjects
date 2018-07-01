<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">
        <summer-title></summer-title>
        <summer></summer>
      </div>

    </layout>

    <top-button></top-button>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import SummerTitle from '../components/Certificate/SummerTitle.vue'
  import Summer from '../components/Certificate/Summer.vue'
  import SignButton from "../components/Util/SignButton.vue";
  import TopButton from "../components/Util/TopButton.vue";

  export default {
    name: 'train-page',
    components: {
      SignButton,
      TopButton,
      Layout,
      Summer,
      SummerTitle
    },
    data() {
      return {}
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
