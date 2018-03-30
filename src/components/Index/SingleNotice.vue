<template>

  <div class="single-notice-wrapper" @click="jumpTo(link)">

    <p class="content">
      {{title}}
    </p>
    <p class="time">{{time}}</p>

  </div>


</template>

<script>

  export default {
    name: 'single-notice',
    data() {
      return {}
    },
    props: ['title', 'time', 'link'],
    methods: {
      jumpTo(link) {
        window.open(link)
      }
    }
  }
</script>

<style scoped src="./SingleNotice.css"></style>
