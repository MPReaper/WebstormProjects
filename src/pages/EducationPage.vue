<template>
  <div class="body-wrapper">
    <layout>

      <div class="container">
        <education></education>
      </div>

    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import Education from '../components/Education/Education.vue'

  export default {
    name: 'index-page',
    components: {
      Layout,
      Education
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>
