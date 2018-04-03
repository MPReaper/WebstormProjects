<template>

  <div>
    <div ref="mapChart" :style="{width: '100%', height: '600px'}"></div>

    <table class="province-list-table">
      <thead>
      <tr>
        <th>省份</th>
        <th>承办单位</th>
        <th>冠名企业</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>江苏</td>
        <td>金陵科技学院</td>
        <td></td>
      </tr>
      <tr>
        <td>上海</td>
        <td>上海市计算机软件评测重点实验室</td>
        <td></td>
      </tr>
      <tr>
        <td>浙江</td>
        <td>浙江理工大学</td>
        <td></td>
      </tr>
      <tr>
        <td>福建</td>
        <td>厦门理工学院</td>
        <td></td>
      </tr>
      <tr>
        <td>广东</td>
        <td>广东拓思软件科学园有限公司</td>
        <td></td>
      </tr>
      <tr>
        <td>云南</td>
        <td>云南大学</td>
        <td></td>
      </tr>
      <tr>
        <td>重庆</td>
        <td>重庆大学</td>
        <td></td>
      </tr>
      <tr>
        <td>湖北</td>
        <td>武汉科技大学</td>
        <td></td>
      </tr>
      <tr>
        <td>山东</td>
        <td>青岛科技大学</td>
        <td></td>
      </tr>
      <tr>
        <td>四川</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>陕西</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>湖南</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>……</td>
        <td></td>
        <td></td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script type="text/babel">

  import echarts from 'echarts'
  import 'echarts/map/js/china.js';

  export default {
    name: 'map-chart',
    components: {},
    data() {
      return {}
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
                {name: '浙江', selected: true},
                {name: '福建', selected: true},
                {name: '广州', selected: true},
                {name: '云南', selected: true},
                {name: '重庆', selected: true},
                {name: '湖北', selected: true},
                {name: '山东', selected: true}
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
