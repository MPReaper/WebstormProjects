<template>

  <div class="index-wrapper">
    <div-header :header="'大赛介绍'"></div-header>

    <div>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;教育部软件工程专业教学指导委员会、中国计算机学会软件工程专业委员会、中国软件测评机构联盟、中国计算机学会系统软件专业委员会和中国计算机学会容错计算专业委员会于2016年联合举办了首届“全国大学生软件测试大赛”，吸引了全国300余所大学的近4000名学生参赛。为了继续深化软件工程实践教学改革、探索产教研融合的软件测试专业培养模式、推进高等院校软件测试专业建设、建立软件产业和高等教育的产学研对接平台，举办2017“全国大学生软件测试大赛”。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本届大赛分为六个分项赛独立进行。四项个人赛为“上海软件中心杯”开发者测试大赛、“智测云杯”移动应用测试大赛、“安恒杯”Web安全测试大赛和“凯云杯”嵌入式测试大赛；两项团队赛为“珠海评测杯”移动应用测试大赛和“泽众杯”Web应用大赛。本次大赛题目来自开源社区和软件企业，大赛分为6月夏季预选赛和10月秋季预选赛、分区决赛和总决赛，总决赛奖金为36万元。每个分项赛独立评分和颁奖。每个分项赛设特等奖、一等奖、二等奖、和三等奖。
      </p>
    </div>

    <el-row :gutter="20">
      <single-intro-card v-for="item in 4"
                         :key="item"
                         :photoName="photoNames[item - 1]"
                         :intro="intros[item - 1]"></single-intro-card>
    </el-row>

  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import {Row} from 'element-ui'
  import SingleIntroCard from './SingleIntroCard.vue'

  export default {
    name: 'sub-index',
    components: {
      DivHeader,
      SingleIntroCard,
      elRow: Row
    },
    data() {
      return {
        photoNames: ['icon1.png', 'icon2.png', 'icon3.png', 'icon4.png'],
        intros: ['强大平台 完全支持', '万元奖金 丰厚奖励', '权威比赛 规模巨大', '交流培训 全面服务'],
      }
    },
    methods: {}
  }
</script>

<style scoped src="./Index.css"></style>
