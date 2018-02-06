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
            <el-dropdown-item>大赛报名</el-dropdown-item>
            <el-dropdown-item>分项赛</el-dropdown-item>
            <el-dropdown-item>分区赛</el-dropdown-item>
            <el-dropdown-item>比赛安排</el-dropdown-item>
            <el-dropdown-item>大赛论坛</el-dropdown-item>
            <el-dropdown-item>大赛通知</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown placement="bottom-start" @command="">
          <span class="el-dropdown-link">
          培训交流<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>学生培训</el-dropdown-item>
            <el-dropdown-item>教授培训</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown placement="bottom-start" @command="">
          <span class="el-dropdown-link">
          国际赛事<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>欧洲赛</el-dropdown-item>
            <el-dropdown-item>北美赛</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-button type="text">组织机构</el-button>
        <el-button type="text">就业通道</el-button>
        <el-button type="text">奖状查询</el-button>
        <el-button type="text">协同育人</el-button>
        <el-button type="text">往届赛事</el-button>

      </div>

    </div>

  </div>
</template>


<script>
  import {Input, Button, Dropdown, DropdownMenu, DropdownItem, Message} from 'element-ui'
  import {router} from '../../main'
  //  import { mapMutations, mapState, mapActions } from 'vuex'
  //  Vue.use(Input)

  export default {
    name: 'navigator',
    components: {
      elInput: Input,
      elButton: Button,
      elDropdown: Dropdown,
      elDropdownMenu: DropdownMenu,
      elDropdownItem: DropdownItem,
    },
    data() {
      return {
        input2: ''
      }
    },
    computed: {},
    methods: {
      goToIndexPage() {
        router.push({name: 'IndexPage'})
      }
    }
  }
</script>

<style scoped src="./Navigator.css"></style>
