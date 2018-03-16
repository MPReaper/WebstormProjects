<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">
        <employ-title></employ-title>
        <employ></employ>
      </div>

    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import EmployTitle from '../components/Train/EmployTitle.vue'
  import Employ from '../components/Train/Employ.vue'

  export default {
    name: 'train-page',
    components: {
      Layout,
      EmployTitle,
      Employ
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
      }
    }
  }
</script>
