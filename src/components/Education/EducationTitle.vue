<template>

  <div class="title-wrapper" :style="{ backgroundImage: 'url(' + bannerUrl + ')' }">
    协同育人
  </div>

</template>

<script>

  export default {
    name: 'education-title',
    components: {},
    data() {
      let name = 'education.png';
      return {
        bannerUrl: require('../../assets/img/' + name)
      }
    },
    methods: {}
  }
</script>

<style scoped src="./EducationTitle.css"></style>
