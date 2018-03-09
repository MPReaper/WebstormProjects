<template>

  <div class="education-wrapper">
    <div-header :header="'2017年合作院校'"></div-header>
    <div>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;南京慕测信息科技有限公司参加教育部高教司2017年第二批产学合作协同育人项目，共收到项目申请19项。公司组织有关专家按照公开、公平、公正的原则，对申报项目进行了评审，遴选出8项予以支持（立项名单见附件），并已向社会公示。公司已经与立项项目合作单位（或负责人）签订了合作协议，所承诺的资助经费、软硬件设备及云平台等资源免费使用权将按照协议拨付。鉴于本次申请学校数量较多，考虑不同学校的学科侧重点、生源基础、培养目标差别较大，学校层次、地区分布等多种情况，本次实际予以支持的项目数量从原计划的7个增加为8个。
      </p>

      <br><br>
      <table class="education-list-table">
        <thead>
        <tr>
          <th>项目类型</th>
          <th>项目名称</th>
          <th>承担学校</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>教学内容和课程体系改革</td>
          <td>“软件测试技术”教学内容改革</td>
          <td>厦门理工学院</td>
        </tr>
        <tr>
          <td>教学内容和课程体系改革</td>
          <td>基于慕测的软件测试案例建设</td>
          <td>云南大学</td>
        </tr>
        <tr>
          <td>教学内容和课程体系改革</td>
          <td>面向行业需求的软件测试课程教学改革与实践</td>
          <td>广州大学</td>
        </tr>
        <tr>
          <td>教学内容和课程体系改革</td>
          <td>软件测试教学内容改革与实践</td>
          <td>河南工业大学</td>
        </tr>
        <tr>
          <td>教学内容和课程体系改革</td>
          <td>移动应用测试案例建设</td>
          <td>西北工业大学</td>
        </tr>
        <tr>
          <td>教学内容和课程体系改革</td>
          <td>高职《软件测试》课程教学内容改革</td>
          <td>常州信息职业技术学院</td>
        </tr>
        <tr>
          <td>教学内容和课程体系改革</td>
          <td>“软件测试方法和技术”测试案例建设</td>
          <td>重庆邮电大学</td>
        </tr>
        <tr>
          <td>教学内容和课程体系改革</td>
          <td>软件测试教学内容改革</td>
          <td>北京联合大学</td>
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
