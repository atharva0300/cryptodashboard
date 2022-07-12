import React from 'react';
import { Col, Row, Typography } from 'antd';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);


const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }

  /*
  for(let i=0;i<coinTimestamp.length;i++){
    console.log(coinTimestamp[i])
  }

  for(let i=0;i<coinPrice.length;i++){
    console.log(coinPrice[i])
  }
  */

  console.log(coinTimestamp.length);
  console.log(coinPrice.length);

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };
  console.log('data : ' , data);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line options = {options} data= {data}/>
    </>
  );
};

export default LineChart;