<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">
        <new-progress-title></new-progress-title>
        <new-progress></new-progress>
      </div>

    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import NewProgressTitle from '../components/Notice/NewProgressTitle.vue'
  import NewProgress from '../components/Notice/NewProgress.vue'

  export default {
    name: 'new-progress-page',
    components: {
      Layout,
      NewProgressTitle,
      NewProgress
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
