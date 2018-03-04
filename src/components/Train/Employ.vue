<template>

  <div class="train-wrapper">
    <div-header :header="'就业通道'"></div-header>
    <div>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就业通道还未发布，敬请期待。
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
