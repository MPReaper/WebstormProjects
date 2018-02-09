<template>
  <div class="body-wrapper">
    <layout>
      <div class="container">
        <student-train></student-train>
      </div>

    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import StudentTrain from '../components/Train/StudentTrain.vue'

  export default {
    name: 'train-page',
    components: {
      Layout,
      StudentTrain
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>
