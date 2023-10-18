import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';


export default function BarChartGraph() {
  return (
    <div className="y-axis-ticks"> 
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] }]}
      series={[{ data: [5,4,10,7,5,3,9,4,8,12,3,6] }]}
      width={650}
      height={300}
      yAxis={[{ ticks: { display: false } }] }
    />
    </div>
  );
}