<template>

  <div class="title-wrapper" :style="{ backgroundImage: 'url(' + bannerUrl + ')' }">
    组织机构
  </div>

</template>

<script>

  export default {
    name: 'committee-title',
    components: {},
    data() {
      let name = 'banner.png';
      return {
        bannerUrl: require('../../assets/img/' + name)
      }
    },
    methods: {}
  }
</script>

<style scoped src="./CommitteeTitle.css"></style>
