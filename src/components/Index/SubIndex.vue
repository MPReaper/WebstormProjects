<template>

  <div class="index-wrapper">
    <div-header :header="'分项赛'"></div-header>

    <el-row :gutter="20">
      <single-sub-index v-for="item in 5"
                        :key="item"
                        :photoName="photoNames[item - 1]"
                        :name="names[item - 1]"
                        :intro="intros[item - 1]"
                        :link="link[item - 1]"></single-sub-index>
    </el-row>

  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import {Row} from 'element-ui'
  import SingleSubIndex from './SingleSubIndex.vue'

  export default {
    name: 'sub-index',
    components: {
      DivHeader,
      SingleSubIndex,
      elRow: Row
    },
    data() {
      return {
        photoNames: ['index1.png', 'index2.png', 'index3.png', 'index4.png', 'index6.png'],
        names: ['开发者测试', '移动应用测试', '软件安全测试', '嵌入式测试', 'Web应用测试'],
        intros: ['"上海软件中心杯"开发者测试大赛', '"智测云杯"移动应用测试大赛', '"安恒杯"Web安全测试大赛',
          '"凯云杯"嵌入式测试大赛', '"择众杯"Web应用测试大赛'],
        link: ['IndexPage', 'IndexPage', 'IndexPage', 'IndexPage', 'IndexPage']
      }
    },
    methods: {}
  }
</script>

<style scoped src="./Index.css"></style>
