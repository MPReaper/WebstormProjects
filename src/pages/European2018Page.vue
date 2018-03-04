<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">
        <international-title></international-title>
        <european2018></european2018>
      </div>

    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import European2018 from '../components/International/European2018.vue'
  import InternationalTitle from '../components/International/InternationalTitle.vue'
  import Photo from '../components/Index/Photo.vue'

  export default {
    name: 'index-page',
    components: {
      Layout,
      European2018,
      InternationalTitle,
      Photo
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
