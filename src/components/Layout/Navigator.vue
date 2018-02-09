<template>
  <div class="nav-wrapper">
    <div class="container">
      <div class="left-wrapper" @click="goToIndexPage">
        <!--<img src="../../assets/img/icon.png" width="30">-->
        <p>全国大学生软件测试大赛</p>
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
            <el-dropdown-item>分区赛</el-dropdown-item>
            <el-dropdown-item>比赛安排</el-dropdown-item>
            <a target="_blank" :href="'http://forum.mooctest.net/'">
              <el-dropdown-item>大赛论坛</el-dropdown-item>
            </a>
            <el-dropdown-item>大赛通知</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown placement="bottom-start" @command="handleTrainCommand">
          <span class="el-dropdown-link">
          培训交流<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" @command="">
            <el-dropdown-item command="StudentTrainPage">学生培训</el-dropdown-item>
            <el-dropdown-item>教授培训</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-button type="text" @click="goToInternationalPage">国际赛事</el-button>
        <el-button type="text" @click="goToCommitteePage">组织机构</el-button>
        <el-button type="text">就业通道</el-button>
        <el-button type="text">奖状查询</el-button>
        <el-button type="text" @click="goToEducationPage">协同育人</el-button>
        <el-button type="text">往届赛事</el-button>

      </div>

    </div>

  </div>
</template>


<script>
  import {Button, Dropdown, DropdownMenu, DropdownItem, Message} from 'element-ui'
  import {router} from '../../main'

  export default {
    name: 'navigator',
    components: {
      elButton: Button,
      elDropdown: Dropdown,
      elDropdownMenu: DropdownMenu,
      elDropdownItem: DropdownItem,
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
      }
    }
  }
</script>

<style scoped src="./Navigator.css"></style>
