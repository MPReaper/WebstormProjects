<template>

  <div>
    <table class="province-list-table">
      <thead>
      <tr>
        <th>省份</th>
        <th>承办单位</th>
        <th>冠名</th>
        <th>省赛文件</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>江苏</td>
        <td>南京大学、陆军工程大学、金陵科技学院</td>
        <td></td>
        <td><a :href="jiangsuUrl" target="_blank">查看文件</a></td>
      </tr>
      <tr>
        <td>上海</td>
        <td>上海市计算机软件评测重点实验室</td>
        <td></td>
        <td></td>
      </tr>
      <!--<tr>-->
      <!--<td>浙江</td>-->
      <!--<td>浙江理工大学</td>-->
      <!--<td></td>-->
      <!--</tr>-->
      <tr>
        <td>福建</td>
        <td>厦门理工学院</td>
        <td></td>
        <td><a :href="fujianUrl" target="_blank">查看文件</a></td>
      </tr>
      <tr>
        <td>广东</td>
        <td>广东拓思软件科学园有限公司</td>
        <td></td>
        <td><a :href="guangdongUrl" target="_blank">查看文件</a></td>
      </tr>
      <tr>
        <td>重庆</td>
        <td>重庆邮电大学</td>
        <td></td>
        <td><a :href="chongqingUrl" target="_blank">查看文件</a></td>
      </tr>
      <tr>
        <td>湖北</td>
        <td>武汉科技大学、湖北省软件行业协会</td>
        <td></td>
        <td><a :href="hubeiUrl" target="_blank">查看文件</a></td>
      </tr>
      <tr>
        <td>安徽</td>
        <td>安徽工业大学、芜湖职业技术学院</td>
        <td></td>
        <td><a :href="anhuiUrl" target="_blank">查看文件</a></td>
      </tr>
      <tr>
        <td>陕西</td>
        <td>西北工业大学、西安邮电大学 </td>
        <td></td>
        <td><a :href="shanxiUrl" target="_blank">查看文件</a></td>
      </tr>
      <tr>
        <td>黑龙江</td>
        <td>哈尔滨工程大学、哈尔滨工业大学、黑龙江省软件学会 </td>
        <td></td>
        <td><a :href="heilongjiangUrl" target="_blank">查看文件</a></td>
      </tr>
      <tr>
        <td>……</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </tbody>
    </table>
    <div ref="mapChart" :style="{width: '100%', height: '600px'}"></div>

  </div>
</template>

<script type="text/babel">

  import echarts from 'echarts'
  import 'echarts/map/js/china.js';
  import chongqingPdf from '../../assets/pdf/chongqing.pdf'
  import jiangsuPdf from '../../assets/pdf/jiangsu.pdf'
  import hubeiPdf from '../../assets/pdf/hubei.pdf'
  import guangdongPdf from '../../assets/pdf/guangdong.pdf'
  import fujianPdf from '../../assets/pdf/fujian.pdf'
  import anhuiPdf from '../../assets/pdf/anhui.pdf'
  import shanxiPdf from '../../assets/pdf/shanxi.pdf'
  import heilongjiangPdf from '../../assets/pdf/heilongjiang.pdf'

  export default {
    name: 'map-chart',
    components: {},
    data() {
      return {
        chongqingUrl: chongqingPdf,
        jiangsuUrl: jiangsuPdf,
        hubeiUrl: hubeiPdf,
        guangdongUrl: guangdongPdf,
        fujianUrl: fujianPdf,
        anhuiUrl: anhuiPdf,
        shanxiUrl: shanxiPdf,
        heilongjiangUrl: heilongjiangPdf
      }
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'setEchart'
    },
    methods: {
      setEchart() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(this.$refs.mapChart)
        // 绘制图表
        myChart.setOption({
          series: [
            {
              type: 'map',
              mapType: 'china',
              label: {
                normal: {
                  show: true
                }
              },
              itemStyle: {
//                normal: {
//                  areaColor: '#323c48',
//                  borderColor: '#404a59'
//                },
                emphasis: {
//                  areaColor: '#eee'
                }
              },
              data: [
                {name: '江苏', selected: true},
                {name: '上海', selected: true},
                {name: '黑龙江', selected: true},
                {name: '福建', selected: true},
                {name: '广东', selected: true},
                {name: '陕西', selected: true},
                {name: '重庆', selected: true},
                {name: '湖北', selected: true},
                {name: '安徽', selected: true}
              ]
            }
          ]
        })
      }
    },
    mounted() {
      this.$nextTick(function () {
        this.setEchart()
      })
    }
  }
</script>

<style scoped src="./ProvinceListTable.css"></style>
