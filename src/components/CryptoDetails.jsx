import React from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col , Row, Typography, Select} from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { useState } from 'react';

import { useGetCryptoDetailsQuery } from '../services/cryptoApi';

// destructuring the Typography
const { Title, Text} = Typography;
const { Option } = Select;

function CryptoDetails() {
  const { coinId} = useParams();
  console.log(coinId);
  const {timePeriod, setTimePeriod} = useState('7d');
  const {data , isFetching} = useGetCryptoDetailsQuery(coinId);
  //getting all the data of a specific crypto coin

  console.log(data);
  console.log('coinId : ' , coinId);
  if(isFetching){
    return 'Loading...';
  }
  return (
    <div>CryptoDetails {coinId} </div>
  )
}

export default CryptoDetails