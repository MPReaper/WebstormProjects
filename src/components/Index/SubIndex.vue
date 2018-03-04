<template>

  <div class="sub-index-wrapper">
    <div-header :header="'分项赛'"></div-header>

    <div class="single-sub-index-wrapper">
      <single-sub-index v-for="item in 5"
                        :key="item"
                        :photoName="photoNames[item - 1]"
                        :name="names[item - 1]"
                        :intro="intros[item - 1]"
                        :link="link[item - 1]"></single-sub-index>
    </div>
  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import SingleSubIndex from './SingleSubIndex.vue'

  export default {
    name: 'sub-index',
    components: {
      DivHeader,
      SingleSubIndex
    },
    data() {
      return {
        photoNames: ['index1.png', 'index2.png', 'index3.png', 'index4.png', 'index6.png'],
        names: ['开发者测试', '移动应用测试', 'Web应用测试', 'Web安全测试', '嵌入式测试'],
        intros: ['"上海软件杯"测试大赛', '"智测云杯"测试大赛', '"安恒杯"测试大赛', '"凯云杯"测试大赛', '"择众杯"测试大赛'],
        link: ['DeveloperPage', 'MobilePage', 'WebPage', 'SecurityPage', 'EmbeddedPage']
      }
    },
    methods: {}
  }
</script>

<style scoped src="./SubIndex.css"></style>
