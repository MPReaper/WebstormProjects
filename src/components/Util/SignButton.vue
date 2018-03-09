<template>
  <div>
    <el-tooltip class="item" effect="dark" content="立即报名" placement="left">
      <div class="sign-button-phone el-icon-edit-outline hidden-sm-and-up" @click="signUp">
      </div>
    </el-tooltip>

    <div class="sign-button hidden-xs-only" @click="signUp">立即<br>报名
    </div>
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
      signUp() {
        window.location.href = 'http://www.mooctest.net/contest/list'
      }
    }
  }
</script>

<style scoped src="./SignButton.css"></style>
