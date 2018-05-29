<template>

  <div class="sub-index-wrapper">
    <div-header :header="'分项赛'"></div-header>

    <div class="single-sub-index-wrapper">
      <el-row>
        <single-sub-index v-for="item in 6"
                          :key="item"
                          :photoName="photoNames[item - 1]"
                          :name="names[item - 1]"
                          :intro="intros[item - 1]"
                          :link="link[item - 1]"></single-sub-index>
      </el-row>
    </div>
  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import SingleSubIndex from './SingleSubIndex.vue'
  import {Row} from 'element-ui';

  export default {
    name: 'sub-index',
    components: {
      elRow: Row,
      DivHeader,
      SingleSubIndex
    },
    data() {
      return {
        photoNames: ['index1.png', 'index2.png', 'index3.png', 'index4.png', 'index5.png', 'index6.png'],
        names: ['上海软件中心杯', '拓思杯', '旋极杯', '慕测杯', '安恒杯', '虚席以待'],
        intros: ['开发者测试大赛', '移动应用测试大赛', '嵌入式测试大赛', 'Web应用测试大赛', 'Web安全测试大赛', 'AI系统测试大赛'],
        link: ['DeveloperPage', 'MobilePage', 'EmbeddedPage', 'WebPage', 'SecurityPage', 'AIPage']
      }
    },
    methods: {}
  }
</script>

<style scoped src="./SubIndex.css"></style>
