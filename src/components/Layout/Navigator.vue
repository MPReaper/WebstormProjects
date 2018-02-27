<template>
  <div class="nav-wrapper">
    <div class="container">
      <div class="hidden-xs-only left-wrapper" @click="goToIndexPage">
        <!--<img src="../../assets/img/icon.png" width="30">-->
        <p>首页</p>
      </div>

      <div class="right-wrapper">

        <el-dropdown placement="bottom-start" @command="">
          <span class="el-dropdown-link">
          2018赛事<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <a target="_blank" :href="'http://www.mooctest.net/contest/list'">
              <el-dropdown-item>大赛报名
              </el-dropdown-item>
            </a>
            <el-dropdown-item>分项赛</el-dropdown-item>
            <!--<el-dropdown-item>分区赛</el-dropdown-item>-->
            <el-dropdown-item>比赛安排</el-dropdown-item>
            <a target="_blank" :href="'http://forum.mooctest.net/'">
              <el-dropdown-item>大赛论坛</el-dropdown-item>
            </a>
            <el-dropdown-item>大赛通知</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown class="hidden-xs-only" placement="bottom-start" @command="handleTrainCommand">
          <span class="el-dropdown-link">
          培训交流<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" @command="">
            <el-dropdown-item command="StudentTrainPage">学生培训</el-dropdown-item>
            <el-dropdown-item>教授培训</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-button class="hidden-xs-only" type="text" @click="goToInternationalPage">国际赛事</el-button>
        <el-button class="hidden-xs-only" type="text" @click="goToCommitteePage">组织机构
        </el-button>
        <el-button class="hidden-xs-only hidden-sm-only" type="text">就业通道</el-button>
        <el-button class="hidden-xs-only hidden-sm-only hidden-md-only" type="text">奖状查询</el-button>
        <el-button class="hidden-xs-only" type="text" @click="goToEducationPage">协同育人
        </el-button>
        <el-button class="hidden-xs-only hidden-sm-only hidden-md-only" type="text">往届赛事</el-button>

        <!--middle-->
        <el-dropdown placement="bottom-start" class="hidden-lg-only hidden-xl-only hidden-sm-only hidden-xs-only">
          <span class="el-dropdown-link">
          大赛相关<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" @command="">
            <el-dropdown-item>奖状查询</el-dropdown-item>
            <el-dropdown-item>往届赛事</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <!--small-->
        <el-dropdown placement="bottom-start" class="hidden-lg-only hidden-xl-only hidden-md-only hidden-xs-only">
          <span class="el-dropdown-link">
          大赛相关<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" @command="">
            <el-dropdown-item>就业通道</el-dropdown-item>
            <el-dropdown-item>奖状查询</el-dropdown-item>
            <el-dropdown-item>往届赛事</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <!--extreme-small-->
        <el-dropdown placement="bottom-start" @command="handleXSCommand"
                     class="hidden-lg-only hidden-xl-only hidden-md-only hidden-sm-only">
          <span class="el-dropdown-link">
          大赛相关<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" @command="">
            <el-dropdown-item command="StudentTrainPage">学生培训</el-dropdown-item>
            <el-dropdown-item>教授培训</el-dropdown-item>
            <el-dropdown-item command="InternationalPage">国际赛事</el-dropdown-item>
            <el-dropdown-item command="CommitteePage">组织机构</el-dropdown-item>
            <el-dropdown-item>就业通道</el-dropdown-item>
            <el-dropdown-item>奖状查询</el-dropdown-item>
            <el-dropdown-item command="EducationPage">协同育人</el-dropdown-item>
            <el-dropdown-item>往届赛事</el-dropdown-item>
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
      handleTrainCommand(command) {
        router.push({name: command})
      },
      handleXSCommand(command) {
        router.push({name: command})
      }
    }
  }
</script>

<style scoped src="./Navigator.css"></style>
