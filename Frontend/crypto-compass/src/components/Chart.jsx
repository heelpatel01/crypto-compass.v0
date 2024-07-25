import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function Chart({ coinMarketData }) {
  const dates = coinMarketData.map(point => new Date(point[0]));
  const prices = coinMarketData.map(point => point[1]);

  return (
    <LineChart
      xAxis={[{ data: dates }]}
      series={[
        {
          data: prices,
          area: true,
          label: 'Price in INR',
          borderColor: 'rgb(75, 192, 192)',
          fill: 'rgba(75, 192, 192, 0.2)',
        },
      ]}
      width={1000}
      height={700}
    />
  );
}


// Date.parse(point[0]).getMonth()