import React from 'react';
import { Bar } from 'react-chartjs-2';
import { IBarGraph } from './interfaces';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const BarGraph: React.FC<IBarGraph> = ({
  data,
  width = null,
  height = null
}) => {
  const options = {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: 1000,
        ticks: {
          stepSize: 100
        }
      }
    },
    legend: {
      display: false
    },
    type: 'bar'
  };
  return <Bar data={data} width={width} height={height} options={options} />;
};

export default BarGraph;
