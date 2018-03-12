<template>

  <div class="train-wrapper">
    <div-header :header="'师资培训'"></div-header>
    <div>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大赛师资培训即将启动，敬请关注官网通知。
        <br><br><br><br><br>
      </p>
    </div>

  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'

  export default {
    name: 'education',
    components: {
      DivHeader
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./Train.css"></style>
