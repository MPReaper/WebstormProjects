<template>

  <div>
    <div class="education-wrapper">
      <div-header :header="'夏季预选赛成绩公示'"></div-header>
      <p>
        各位同学：
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;夏季预选赛入选资格和分数已经发布，请登录<a
        target="_blank"
        :href="'http://www.mooctest.net'">慕测平台</a>各自查询。由于部分同学的身份核实还没有完成，组委会将于2018年6月30日截止身份资料上传，并公布最后入选名单。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="el-icon-download"></i> <a :href="SummerDeveloperPUrl">夏季预选赛开发者测试（个人）</a>
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="el-icon-download"></i> <a :href="SummerDeveloperGUrl">夏季预选赛开发者测试（团队）</a>
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="el-icon-download"></i> <a
        :href="SummerMobilePUrl">夏季预选赛移动应用测试（个人）</a>
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="el-icon-download"></i> <a
        :href="SummerMobileGUrl">夏季预选赛移动应用测试（团队）</a>
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="el-icon-download"></i> <a
        :href="SummerSecurityUrl">夏季预选赛Web安全测试</a>
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="el-icon-download"></i> <a :href="SummerEmbeddedUrl">夏季预选赛嵌入式测试</a>
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="el-icon-download"></i> <a
        :href="SummerWebUrl">夏季预选赛Web应用测试</a>
      </p>

      <p style="text-align: right">
        全国大学生软件测试大赛组委会
      </p>
    </div>

    <div class="education-wrapper">
      <div-header :header="'大赛最新进展'"></div-header>
      <div>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. B组参赛者也可以<span class="href-span"
                                                               @click="signUp">报名</span>参加开发者测试大赛。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 分项赛新增<span class="href-span"
                                                            @click="goToAIPage">AI系统测试邀请赛</span>。感兴趣请联系<span
          class="href-span"
          @click="goToCommitteePage">大赛秘书处</span>。<br><br>
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前分项赛如下（A组为在校大学生，B组为高职高专学生）：
        </p>
        <table class="class-table">
          <thead>
          <tr>
            <th></th>
            <th @click="goToDeveloperPage">"上海软件中心杯"开发者测试大赛</th>
            <th @click="goToMobilePage">"拓思杯"移动应用测试大赛</th>
            <th @click="goToEmbeddedPage">"旋极杯"嵌入式测试大赛</th>
            <th @click="goToWebPage">"慕测杯"Web应用测试大赛</th>
            <th @click="goToSecurityPage">"安恒杯"Web安全测试大赛</th>
            <th @click="goToAIPage">"虚席以待"AI系统测试邀请赛</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>A组</td>
            <td><i class="el-icon-success"></i></td>
            <td><i class="el-icon-success"></i></td>
            <td><i class="el-icon-success"></i></td>
            <td></td>
            <td><i class="el-icon-success"></i></td>
            <td><i class="el-icon-success"></i></td>
          </tr>
          <tr>
            <td>B组</td>
            <td><i class="el-icon-success"></i></td>
            <td><i class="el-icon-success"></i></td>
            <td></td>
            <td><i class="el-icon-success"></i></td>
            <td></td>
            <td><i class="el-icon-success"></i></td>
          </tr>
          </tbody>
        </table>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. <span class="href-span"
                                                       @click="goToRoutinePage">省赛承办申请</span>已经开始，相关事宜请联系<span
          class="href-span"
          @click="goToCommitteePage">大赛秘书处</span>：xujianfeng@mooctest.com（徐老师），zychen@nju.edu.cn（陈老师）。
        </p>
      </div>

    </div>
  </div>
</template>

<script>

  import DivHeader from '../Util/DivHeader.vue'
  import {router} from '../../main'

  import SummerDeveloperPPdf from '../../assets/pdf/summer-developer-p.pdf'
  import SummerDeveloperGPdf from '../../assets/pdf/summer-developer-g.pdf'
  import SummerMobileGPdf from '../../assets/pdf/summer-mobile-g.pdf'
  import SummerMobilePPdf from '../../assets/pdf/summer-mobile-p.pdf'
  import SummerSecurityPdf from '../../assets/pdf/summer-security.pdf'
  import SummerWebPdf from '../../assets/pdf/summer-web.pdf'
  import SummerEmbeddedPdf from '../../assets/pdf/summer-embedded.pdf'

  export default {
    name: 'new-progress',
    components: {
      DivHeader,
      SummerDeveloperPPdf,
      SummerDeveloperGPdf,
      SummerMobileGPdf,
      SummerMobilePPdf,
      SummerSecurityPdf,
      SummerWebPdf,
      SummerEmbeddedPdf
    },
    data() {
      return {
        SummerDeveloperPUrl: SummerDeveloperPPdf,
        SummerDeveloperGUrl: SummerDeveloperGPdf,
        SummerMobileGUrl: SummerMobileGPdf,
        SummerMobilePUrl: SummerMobilePPdf,
        SummerSecurityUrl: SummerSecurityPdf,
        SummerWebUrl: SummerWebPdf,
        SummerEmbeddedUrl: SummerEmbeddedPdf
      }
    },
    methods: {
      goToRoutinePage() {
        router.push({name: 'RoutinePage'})
        this.$nextTick(function () {
          $("html, body").animate({scrollTop: $("#provinceIntro").offset().top - 50}, 500);
        })
      },
      goToCommitteePage() {
        router.push({name: 'CommitteePage'})
      },
      goToDeveloperPage() {
        router.push({name: 'DeveloperPage'})
      },
      goToMobilePage() {
        router.push({name: 'MobilePage'})
      },
      goToWebPage() {
        router.push({name: 'WebPage'})
      },
      goToEmbeddedPage() {
        router.push({name: 'EmbeddedPage'})
      },
      goToSecurityPage() {
        router.push({name: 'SecurityPage'})
      },
      goToAIPage() {
        router.push({name: 'AIPage'})
      },
      signUp() {
        window.location.href = 'http://www.mooctest.net/contest/list'
      }
    }
  }
</script>

<style scoped src="./NewProgress.css"></style>
