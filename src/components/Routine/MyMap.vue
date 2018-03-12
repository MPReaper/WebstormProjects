<template>

  <div ref="mapChart" :style="{width: '100%', height: '600px'}"></div>

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
                },
                emphasis: {
                  show: true
                }
              },
              data: [
//                {name: '广东', selected: true},
//                {name: '北京', selected: true}
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
