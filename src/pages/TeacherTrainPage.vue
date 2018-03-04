<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">
        <teacher-train-title></teacher-train-title>
        <teacher-train></teacher-train>
      </div>

    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import TeacherTrain from '../components/Train/TeacherTrain.vue'
  import TeacherTrainTitle from '../components/Train/TeacherTrainTitle.vue'

  export default {
    name: 'train-page',
    components: {
      Layout,
      TeacherTrain,
      TeacherTrainTitle
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
