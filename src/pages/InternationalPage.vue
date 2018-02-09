<template>
  <div class="body-wrapper">
    <layout>

      <international-banner></international-banner>
      <div class="container">
        <european></european>
        <american></american>
      </div>

    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import InternationalBanner from '../components/Banner/InternationalBanner.vue'
  import European from '../components/International/European.vue'
  import American from '../components/International/American.vue'
  import Photo from '../components/Index/Photo.vue'

  export default {
    name: 'index-page',
    components: {
      InternationalBanner,
      Layout,
      American,
      European,
      Photo
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>
