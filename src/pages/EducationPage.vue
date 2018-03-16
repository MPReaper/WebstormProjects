<template>
  <div class="body-wrapper">
    <layout>

      <div class="container">
        <education-title></education-title>
        <education></education>
        <education-list></education-list>
      </div>

    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import Education from '../components/Education/Education.vue'
  import EducationTitle from '../components/Education/EducationTitle.vue'
  import EducationList from '../components/Education/EducationList.vue'

  export default {
    name: 'index-page',
    components: {
      Layout,
      Education,
      EducationTitle,
      EducationList

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
      }
    }
  }
</script>
