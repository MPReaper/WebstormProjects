<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">
        <student-train-title></student-train-title>
        <student-train></student-train>
      </div>

    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import StudentTrain from '../components/Train/StudentTrain.vue'
  import StudentTrainTitle from '../components/Train/StudentTrainTitle.vue'

  export default {
    name: 'train-page',
    components: {
      Layout,
      StudentTrain,
      StudentTrainTitle
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
