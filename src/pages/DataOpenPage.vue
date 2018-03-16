<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">
        <data-open-title></data-open-title>
        <data-open></data-open>
      </div>

    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import DataOpen from '../components/DataOpen/DataOpen.vue'
  import DataOpenTitle from '../components/DataOpen/DataOpenTitle.vue'

  export default {
    name: 'index-page',
    components: {
      Layout,
      DataOpen,
      DataOpenTitle
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
