import React from 'react';
import ReactEcharts from 'echarts-for-react'; // Assuming you're using ECharts in your project

const Chakara = () => {
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Sale 1' },
          { value: 735, name: 'Sale 2' },
          { value: 580, name: 'Sale 3' },
          { value: 484, name: 'Sale 4' },
          { value: 300, name: 'Sale 5' }
        ]
      }
    ]
  };

  return (
    <div>
      <ReactEcharts option={option} style={{ height: '280px', width: '100%',marginTop:"5px",paddingTop:"5px" }} />
    </div>
  );
};

export default Chakara;
