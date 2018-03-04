<template>

  <div class="title-wrapper" :style="{ backgroundImage: 'url(' + bannerUrl + ')' }">
    证书查询
  </div>

</template>

<script>

  export default {
    name: 'certificate-title',
    components: {},
    data() {
      let name = 'certificate.png';
      return {
        bannerUrl: require('../../assets/img/' + name)
      }
    },
    methods: {}
  }
</script>

<style scoped src="./CertificateTitle.css"></style>
