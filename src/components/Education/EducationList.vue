<template>

  <div class="education-wrapper">
    <div-header :header="'2017年第二批产学合作协同育人项目立项名单 (节选)'"></div-header>
    <div>
      <table class="education-list-table">
        <thead>
        <tr>
          <th>项目编号</th>
          <th>公司名称</th>
          <th>项目类型</th>
          <th>项目名称</th>
          <th>承担学校</th>
          <th>负责人</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>201702083001</td>
          <td>南京慕测信息科技有限公司</td>
          <td>教学内容和课程体系改革</td>
          <td>“软件测试技术”教学内容改革</td>
          <td>厦门理工学院</td>
          <td>肖蕾</td>
        </tr>
        <tr>
          <td>201702083002</td>
          <td>南京慕测信息科技有限公司</td>
          <td>教学内容和课程体系改革</td>
          <td>基于慕测的软件测试案例建设</td>
          <td>云南大学</td>
          <td>刘金卓</td>
        </tr>
        <tr>
          <td>201702083003</td>
          <td>南京慕测信息科技有限公司</td>
          <td>教学内容和课程体系改革</td>
          <td>面向行业需求的软件测试课程教学改革与实践</td>
          <td>广州大学</td>
          <td>李亚</td>
        </tr>
        <tr>
          <td>201702083004</td>
          <td>南京慕测信息科技有限公司</td>
          <td>教学内容和课程体系改革</td>
          <td>软件测试教学内容改革与实践</td>
          <td>河南工业大学</td>
          <td>赵玉娟</td>
        </tr>
        <tr>
          <td>201702083005</td>
          <td>南京慕测信息科技有限公司</td>
          <td>教学内容和课程体系改革</td>
          <td>移动应用测试案例建设</td>
          <td>西北工业大学</td>
          <td>郑炜</td>
        </tr>
        <tr>
          <td>201702083006</td>
          <td>南京慕测信息科技有限公司</td>
          <td>教学内容和课程体系改革</td>
          <td>“软件测试方法和技术”测试案例建设</td>
          <td>重庆邮电大学</td>
          <td>钱鹰</td>
        </tr>
        <tr>
          <td>201702083007</td>
          <td>南京慕测信息科技有限公司</td>
          <td>教学内容和课程体系改革</td>
          <td>软件测试教学内容改革</td>
          <td>北京联合大学</td>
          <td>马楠</td>
        </tr>
        </tbody>
      </table>
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

<style scoped src="./EducationListTable.css"></style>
<style scoped src="./Education.css"></style>
