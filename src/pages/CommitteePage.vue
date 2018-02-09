<template>
  <div class="body-wrapper">
    <layout>

      <div class="container">
        <committee></committee>
      </div>

    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import Committee from '../components/Committee/Committee.vue'

  export default {
    name: 'committee-page',
    components: {
      Layout,
      Committee
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>
