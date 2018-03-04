<template>
  <div class="body-wrapper">
    <layout>

      <international-banner></international-banner>
      <div class="container">
        <european2017></european2017>
        <american2018></american2018>
        <european2018></european2018>
      </div>

    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import InternationalBanner from '../components/Banner/InternationalBanner.vue'
  import European2017 from '../components/International/European2017.vue'
  import European2018 from '../components/International/European2018.vue'
  import American2018 from '../components/International/American2018.vue'
  import Photo from '../components/Index/Photo.vue'

  export default {
    name: 'index-page',
    components: {
      InternationalBanner,
      Layout,
      American2018,
      European2017,
      European2018,
      Photo
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>
