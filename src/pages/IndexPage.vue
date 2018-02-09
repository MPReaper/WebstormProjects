<template>
  <div class="body-wrapper">
    <layout>

      <banner></banner>
      <div class="container">

        <notice-index></notice-index>

        <photo></photo>

        <sub-index></sub-index>

        <routine-index></routine-index>

        <intro-index></intro-index>

        <figure-index></figure-index>

        <hint-index></hint-index>

      </div>


    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import Banner from '../components/Banner/Banner.vue'
  import NoticeIndex from '../components/Index/NoticeIndex.vue'
  import Photo from '../components/Index/Photo.vue'
  import SubIndex from '../components/Index/SubIndex.vue'
  import RoutineIndex from '../components/Index/RoutineIndex.vue'
  import IntroIndex from '../components/Index/IntroIndex.vue'
  import FigureIndex from '../components/Index/FigureIndex.vue'
  import HintIndex from '../components/Index/HintIndex.vue'

  export default {
    name: 'index-page',
    components: {
      Layout,
      Banner,
      NoticeIndex,
      Photo,
      SubIndex,
      RoutineIndex,
      IntroIndex,
      FigureIndex,
      HintIndex
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>
