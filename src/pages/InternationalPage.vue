<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">
        <international-title></international-title>
        <international></international>
      </div>

    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import InternationalTitle from '../components/International/InternationalTitle.vue'
  import International from '../components/International/International.vue'

  export default {
    name: 'index-page',
    components: {
      Layout,
      InternationalTitle,
      International
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
