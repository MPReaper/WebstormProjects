<template>
  <div class="body-wrapper">
    <layout>

      <div class="container">
        <article-title></article-title>
        <articles></articles>
      </div>

    </layout>
  </div>

</template>

<script>
  import Layout from '../components/Layout/Layout.vue'
  import Routine from '../components/Routine/Routine.vue'
  import ArticleTitle from '../components/Notice/ArticleTitle.vue'
  import Articles from '../components/Notice/Articles.vue'

  export default {
    name: 'routine-page',
    components: {
      Layout,
      Routine,
      ArticleTitle,
      Articles
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
