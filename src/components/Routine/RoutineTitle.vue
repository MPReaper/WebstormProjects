<template>

  <div class="title-wrapper" :style="{ backgroundImage: 'url(' + bannerUrl + ')' }">
    赛程安排
  </div>

</template>

<script>

  export default {
    name: 'routine-title',
    components: {},
    data() {
      let name = 'routine.png';
      return {
        bannerUrl: require('../../assets/img/' + name)
      }
    },
    methods: {}
  }
</script>

<style scoped src="./RoutineTitle.css"></style>
