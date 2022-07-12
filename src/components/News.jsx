import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card} from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Text , Title }= Typography
const { Option } = Select;

const demoImageUrl = 'https://th.bing.com/th/id/OIP.wqphK4MtsIvc8lAMhe80uwHaE7?w=265&h=180&c=7&r=0&o=5&pid=1.7';


function News({simplified}) {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { 
    data : cryptoNews
  } = useGetCryptoNewsQuery({newsCategory , count : simplified ? 6 : 12})
  const { data } = useGetCryptosQuery(100);
  //getting all the data of the cryptocurrency

  console.log(cryptoNews)

  if(!cryptoNews?.value){
    return 'Loading...';
  }


  return (
    <Row gutter = {[24,24]}>
      {!simplified && (
        <Col span = {24}>
          <Select showSearch className='Select a news category' placeholder = "Select a Crypto" optionFilterProp = "children" onChange = {(value) => setNewsCategory(value)} filterOption = {(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase())}>
            <Option value = "Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin) => <Option value = {coin.name}>{coin.name}</Option>)}
          </Select>
        </Col>
      )}
      {cryptoNews?.value.map((news) => (
        <Col xs = {24} sm = {12} lg = {8} key = {news.name}>
          <Card hoverable className='news-card'>
            <a href = {news.url} target = "blank" rel = "noreferrer">
              <div className='news-image-container'>
                <Title className="news-title" level ={4}>{news.name}</Title>
                <img style = {{maxWidth:'200px', maxHeight : '100px'}} src = {news?.image?.thumbnail?.contentUrl || demoImageUrl} alt = "news"/>
              </div>
              <p>
                {news.description > 100 ? `${news.description.substring(0,100)} ...` : news.description}
              </p>
              <div className='provider-container'>
                <div>
                  <Avatar src = {news.provider[0]?.image?.thumbnail?.contentUrl || demoImageUrl} alt = "news" />
                  <Text className='provider-name'>{news.provider[0]?.name}</Text>
                </div>
                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News