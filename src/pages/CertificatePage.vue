<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">
        <certificate-title></certificate-title>
        <certificate></certificate>
      </div>

    </layout>

    <top-button></top-button>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import CertificateTitle from '../components/Certificate/CertificateTitle.vue'
  import Certificate from '../components/Certificate/Certificate.vue'
  import SignButton from "../components/Util/SignButton.vue";
  import TopButton from "../components/Util/TopButton.vue";

  export default {
    name: 'train-page',
    components: {
      SignButton,
      TopButton,
      Layout,
      Certificate,
      CertificateTitle
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
      },
      goToTop() {
        window.scrollTo(0, 0);
      }
    }
  }
</script>

<style scoped src="./Page.css"></style>
