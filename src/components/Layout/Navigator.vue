<template>
  <div class="nav-wrapper">
    <div class="container">
      <div class="left-wrapper" @click="goToIndexPage">
        <img src="../../assets/img/logo.png" width="50px">
      </div>

      <div class="right-wrapper">

        <el-button type="text" @click="goToIndexPage"class="hidden-xs-only">首页
        </el-button>

        <el-dropdown placement="bottom-start" @command="handleIndexCommand">
          <span class="el-dropdown-link">
          2018赛事<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>大赛通知</el-dropdown-item>
            <a target="_blank" :href="'http://www.mooctest.net/contest/list'">
              <el-dropdown-item>大赛报名
              </el-dropdown-item>
            </a>
            <el-dropdown-item command="RoutinePage">赛程安排</el-dropdown-item>
            <a target="_blank" :href="'http://forum.mooctest.net/'">
              <el-dropdown-item>大赛论坛</el-dropdown-item>
            </a>

          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown placement="bottom-start" @command="handleSubCommand" class="hidden-xs-only">
          <span class="el-dropdown-link">
            分项赛<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="DeveloperPage">开发者测试</el-dropdown-item>
            <el-dropdown-item command="MobilePage">移动应用测试</el-dropdown-item>
            <el-dropdown-item command="WebPage">Web应用测试</el-dropdown-item>
            <el-dropdown-item command="SecurityPage">Web安全测试</el-dropdown-item>
            <el-dropdown-item command="EmbeddedPage">嵌入式测试</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown placement="bottom-start" @command="handleTrainCommand" class="hidden-xs-only">
          <span class="el-dropdown-link">
          培训就业<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" @command="">
            <el-dropdown-item command="StudentTrainPage">学生培训</el-dropdown-item>
            <el-dropdown-item command="TeacherTrainPage">师资培训</el-dropdown-item>
            <el-dropdown-item command="EmployPage">就业通道</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-button type="text" @click="goToEducationPage" class="hidden-xs-only">协同育人
        </el-button>

        <el-dropdown placement="bottom-start" @command="handleInternationalCommand" class="hidden-xs-only">
          <span class="el-dropdown-link">
          国际赛事<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" @command="">
            <el-dropdown-item command="European2018Page">2018欧洲赛</el-dropdown-item>
            <el-dropdown-item command="American2018Page">2018北美赛</el-dropdown-item>
            <el-dropdown-item command="European2017Page">2017欧洲赛</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-button type="text" @click="goToCommitteePage" class="hidden-xs-only">组织机构
        </el-button>

        <el-dropdown placement="bottom-start" @command="handleCertificateCommand" class="hidden-xs-only">
          <span class="el-dropdown-link">
          历史查询<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" @command="handleCertificateCommand">
            <el-dropdown-item command="CertificatePage">证书查询</el-dropdown-item>
            <a target="_blank" :href="'http://mooctest.org'">
              <el-dropdown-item>2017赛事</el-dropdown-item>
            </a>
            <a target="_blank" :href="'http://mooctest.org/cst2016/index.html'">
              <el-dropdown-item>2016赛事</el-dropdown-item>
            </a>
          </el-dropdown-menu>
        </el-dropdown>

        <!--extreme-small-->
        <el-dropdown placement="bottom-start" @command="handleXSCommand"
                     class="hidden-sm-and-up">
          <span class="el-dropdown-link">
          大赛相关<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" @command="">
            <el-dropdown-item command="StudentTrainPage">学生培训</el-dropdown-item>
            <el-dropdown-item command="TeacherTrainPage">师资培训</el-dropdown-item>
            <el-dropdown-item command="EmployPage">就业通道</el-dropdown-item>
            <el-dropdown-item command="EducationPage">协同育人</el-dropdown-item>
            <el-dropdown-item command="European2018Page">2018欧洲赛</el-dropdown-item>
            <el-dropdown-item command="American2018Page">2018北美赛</el-dropdown-item>
            <el-dropdown-item command="European2017Page">2017欧洲赛</el-dropdown-item>
            <el-dropdown-item command="CommitteePage">组织机构</el-dropdown-item>
            <el-dropdown-item command="CertificatePage">证书查询</el-dropdown-item>
            <a target="_blank" :href="'http://mooctest.org'">
              <el-dropdown-item>2017赛事</el-dropdown-item>
            </a>
            <a target="_blank" :href="'http://mooctest.org/cst2016/index.html'">
              <el-dropdown-item>2016赛事</el-dropdown-item>
            </a>
          </el-dropdown-menu>
        </el-dropdown>

      </div>

    </div>

  </div>
</template>


<script>
  import {Button, Dropdown, DropdownMenu, DropdownItem, Menu, Submenu, MenuItem} from 'element-ui'
  import {router} from '../../main'

  export default {
    name: 'navigator',
    components: {
      elButton: Button,
      elDropdown: Dropdown,
      elDropdownMenu: DropdownMenu,
      elDropdownItem: DropdownItem,
      elMenu: Menu,
      elSubmenu: Submenu,
      elMenuItem: MenuItem
    },
    data() {
      return {}
    },
    computed: {},
    methods: {
      goToIndexPage() {
        router.push({name: 'IndexPage'})
      },
      goToInternationalPage() {
        router.push({name: 'InternationalPage'})
      },
      goToEducationPage() {
        router.push({name: 'EducationPage'})
      },
      goToCommitteePage() {
        router.push({name: 'CommitteePage'})
      },
      handleIndexCommand(command) {
        router.push({name: command})
      },
      handleTrainCommand(command) {
        router.push({name: command})
      },
      handleInternationalCommand(command) {
        router.push({name: command})
      },
      handleSubCommand(command) {
        router.push({name: command})
      },
      handleCertificateCommand(command) {
        router.push({name: command})
      },
      handleXSCommand(command) {
        router.push({name: command})
      }
    }
  }
</script>

<style scoped src="./Navigator.css"></style>
