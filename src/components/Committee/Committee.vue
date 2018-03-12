<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
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
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
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
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="committee-wrapper">
          <div-header :header="'指导委员会'"></div-header>
          <div>
            <table class="committee-table">
              <tbody>
              <tr>
                <td>
                  <li>吕建 (主席)</li>
                </td>
                <td>南京大学教授、中国科学院院士</td>
              </tr>
              <tr>
                <td>
                  <li>黄松</li>
                </td>
                <td>陆军工程大学教授</td>
              </tr>
              <tr>
                <td>
                  <li>金芝</li>
                </td>
                <td>北京大学教授</td>
              </tr>
              <tr>
                <td>
                  <li>刘超</li>
                </td>
                <td>北京航空航天大学教授</td>
              </tr>
              <tr>
                <td>
                  <li>王戟</li>
                </td>
                <td>国防科技大学教授</td>
              </tr>
              <tr>
                <td>
                  <li>Eric Wong</li>
                </td>
                <td>德州大学达拉斯分校教授</td>
              </tr>
              <tr>
                <td>
                  <li>徐宝文</li>
                </td>
                <td>南京大学教授</td>
              </tr>
              <tr>
                <td>
                  <li>杨根兴</li>
                </td>
                <td>中国软件测评机构联盟常务副理事长</td>
              </tr>
              <tr>
                <td>
                  <li>臧斌宇</li>
                </td>
                <td>上海交通大学教授</td>
              </tr>
              <tr>
                <td>
                  <li>张健</li>
                </td>
                <td>中国科学院软件所研究员</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="committee-wrapper" :id="'secretary'">
          <div-header :header="'专家委员会'"></div-header>
          <div>
            <br>
            <ul>
              <li>专家委员会即将发布</li>
            </ul>
            <br>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="committee-wrapper" :id="'secretary'">
          <div-header :header="'大赛秘书处'"></div-header>
          <div>
            <ul>
              <li>南京慕测信息科技有限公司<br>
                联系方式：xujianfeng@mooctest.com（徐老师）
              </li>
              <li>南京大学<br>
                联系方式：zychen@nju.edu.cn（陈老师）
              </li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import {Col, Row} from 'element-ui'

  export default {
    name: 'education',
    components: {
      DivHeader,
      elCol: Col,
      elRow: Row
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped src="./Committee.css"></style>
<style scoped src="./CommitteeTable.css"></style>
