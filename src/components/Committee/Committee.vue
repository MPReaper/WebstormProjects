<template>
  <div>
    <div class="committee-wrapper">
      <div-header :header="'主办单位'"></div-header>
      <div>
        <ul>
          <li>教育部软件工程专业教学指导委员会</li>
          <li>中国计算机学会软件工程专业委员会</li>
          <li>中国软件测评机构联盟</li>
          <li>中国计算机学会系统软件专业委员会</li>
          <li>中国计算机学会容错计算专业委员会</li>
        </ul>
      </div>
    </div>

    <div class="committee-wrapper">
      <div-header :header="'总承办单位'"></div-header>
      <div>
        <ul>
          <li>南京大学</li>
          <li>陆军工程大学</li>
          <li>金陵科技学院</li>
          <li>江苏软件产业人才发展基金会</li>
          <li>江苏省软件新技术与产业化协同创新中心</li>
        </ul>
      </div>
    </div>

    <div class="committee-wrapper">
      <div-header :header="'指导委员会'"></div-header>
      <div>
        <ul>
          <li>吕建 <span>指导委员会主席，南京大学教授、中国科学院院士</span></li>
          <li>黄松 <span>陆军工程大学教授</span></li>
          <li>金芝 <span>北京大学教授</span></li>
          <li>刘超 <span>北京航空航天大学教授</span></li>
          <li>王戟 <span>国防科技大学教授</span></li>
          <li>Eric Wong <span>德州大学达拉斯分校教授</span></li>
          <li>徐宝文 <span>南京大学教授</span></li>
          <li>杨根兴 <span>中国软件测评机构联盟常务副理事长</span></li>
          <li>臧斌宇 <span>上海交通大学教授</span></li>
          <li>张健 <span>中国科学院软件所研究员</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'

  export default {
    name: 'education',
    components: {
      DivHeader
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./Committee.css"></style>
