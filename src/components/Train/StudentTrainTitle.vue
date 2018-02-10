<template>

  <div class="title-wrapper" :style="{ backgroundImage: 'url(' + bannerUrl + ')' }">
    学生培训
  </div>

</template>

<script>

  export default {
    name: 'sub-index',
    components: {},
    data() {
      let name = 'student-train.png';
      return {
        bannerUrl: require('../../assets/img/' + name)
      }
    },
    methods: {}
  }
</script>

<style scoped src="./TrainTitle.css"></style>
