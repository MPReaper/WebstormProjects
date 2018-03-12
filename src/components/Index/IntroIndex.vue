<template>

  <div class="index-wrapper">
    <div-header :header="'大赛介绍'"></div-header>

    <div>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;教育部软件工程专业教学指导委员会、中国计算机学会软件工程专业委员会、中国软件测评机构联盟、中国计算机学会系统软件专业委员会和中国计算机学会容错计算专业委员会于2016年联合举办了首届“全国大学生软件测试大赛”，2017年举办第2届，参赛人数已超过25000人，涉及高校超过330所。
        为了继续深化软件工程实践教学改革、探索产教研融合的软件测试专业培养模式、推进高等院校软件测试专业建设、建立软件产业和高等教育的产学研对接平台，举办2018年“全国大学生软件测试大赛”。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2018大赛面向所有在校大学生设置个人赛，包括专科、本科、研究生。开发者测试、移动应用测试和Web应用测试均采用慕测内置系统，分别为xUnit、Appium和Selenium测试脚本；提供WebIDE和Eclipse插件两者方案；性能测试采用Jmeter。Web安全测试和嵌入式测试采用集成慕测的第三方比赛平台。
        本次大赛题目来自开源社区和软件企业，大赛分为6月夏季预选赛和11月秋季预选赛、分区决赛和总决赛，每个分项赛独立评分和颁奖。
      </p>
    </div>

    <single-intro-card v-for="item in 4"
                       :key="item"
                       :photoName="photoNames[item - 1]"
                       :intro="intros[item - 1]"></single-intro-card>

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
