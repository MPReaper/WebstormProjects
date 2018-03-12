<template>
  <div>
    <el-tooltip class="item" effect="dark" content="返回顶部" placement="left">
      <div class="top-button el-icon-arrow-up" @click="goToTop">
      </div>
    </el-tooltip>
  </div>

</template>

<script>

  import {Tooltip} from 'element-ui'

  export default {
    name: 'sign-button',
    components: {
      elTooltip: Tooltip
    },
    data() {
      return {}
    },
    props: ['header'],
    methods: {
      goToTop() {
        $("html, body").animate({scrollTop: 0}, 500);
      }
    }
  }
</script>

<style scoped src="./TopButton.css"></style>
