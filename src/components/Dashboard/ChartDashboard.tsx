import React from 'react'
import 'chart.js/auto';
import type { ChartData, ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2'
 
  interface ChartDashboardProps {
    options: ChartOptions<'line'>;
    data: ChartData<'line'>;
  }

 const ChartDashboard = ({data , options}:ChartDashboardProps) => {
  return (
        <Line options={options} data={data} />
  )
}

export default ChartDashboard;