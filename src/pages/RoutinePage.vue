<template>
  <div class="body-wrapper">
    <layout>

      <div class="container">
        <routine-title></routine-title>
        <routine-index></routine-index>
        <routine></routine>
      </div>

    </layout>

    <sign-button></sign-button>
    <top-button></top-button>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import Routine from '../components/Routine/Routine.vue'
  import RoutineTitle from '../components/Routine/RoutineTitle.vue'
  import RoutineIndex from '../components/Index/RoutineIndex.vue'
  import SignButton from "../components/Util/SignButton.vue";
  import TopButton from "../components/Util/TopButton.vue";

  export default {
    name: 'routine-page',
    components: {
      SignButton,
      TopButton,
      Layout,
      Routine,
      RoutineTitle,
      RoutineIndex
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
