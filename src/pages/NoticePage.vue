<template>
  <div class="body-wrapper">
    <layout>

      <div class="container">
        <notice-title></notice-title>
        <notice></notice>
      </div>

    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import Routine from '../components/Routine/Routine.vue'
  import NoticeTitle from '../components/Notice/NoticeTitle.vue'
  import Notice from '../components/Notice/Notice.vue'

  export default {
    name: 'routine-page',
    components: {
      Layout,
      Routine,
      NoticeTitle,
      Notice
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
      },
      goToTop() {
        window.scrollTo(0, 0);
      }
    }
  }
</script>
