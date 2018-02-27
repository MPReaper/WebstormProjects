<template>

  <div class="single-sub" @click="goToDetailPage">
    <div class="img-wrapper" :style="{ backgroundImage: 'url(' + photoUrl + ')' }">

    </div>
    <div class="name">{{name}}</div>
    <div class="intro">{{intro}}</div>
  </div>

</template>

<script>

  import {router} from '../../main'

  export default {
    name: 'single-sub-index',
    props: ['photoName', 'name', 'intro', 'link'],
    data() {
      let name = this.photoName;
      return {
        photoUrl: require('../../assets/img/' + name),
      }
    },
    methods: {
      goToDetailPage() {
        router.push({name: this.link})
      }
    }
  }
</script>

<style scoped src="./SingleSubIndex.css"></style>
