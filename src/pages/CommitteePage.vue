<template>
  <div class="body-wrapper">
    <layout>

      <div class="container">
        <committee-title></committee-title>
        <committee></committee>
      </div>

    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import Committee from '../components/Committee/Committee.vue'
  import CommitteeTitle from '../components/Committee/CommitteeTitle.vue'

  export default {
    name: 'committee-page',
    components: {
      Layout,
      Committee,
      CommitteeTitle
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>
