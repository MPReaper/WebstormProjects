<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">
        <international-title></international-title>
        <american2018></american2018>
      </div>

    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import American2018 from '../components/International/American2018.vue'
  import InternationalTitle from '../components/International/InternationalTitle.vue'
  import Photo from '../components/Index/Photo.vue'

  export default {
    name: 'index-page',
    components: {
      Layout,
      American2018,
      InternationalTitle,
      Photo
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>
