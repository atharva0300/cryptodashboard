import React from 'react';
import millify from 'millify';
import {Typography , Row, Col,Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import  { Cryptocurrencies, News } from '../components';
import {motion} from 'framer-motion';
import Loader from './Loader';


const {Title} = Typography;


function Homepage() {
    const { data , isFetching} = useGetCryptosQuery(10);
    console.log(data);

    const globalStats = data?.data?.stats;
    // using this global stats object to represent our stats

    if(isFetching){
        return <Loader />
    }
  return (
    <>
        <Title level = {2} className = "heading">Global Crypto Stats</Title>
        <Row>
            <Col span = {12}><Statistic title = "Total Cryptocurrencies" value= {globalStats.total} /></Col>
            <Col span = {12}><Statistic title = "Total Exchanges" value= {millify(globalStats.totalExchanges)} /></Col>
            <Col span = {12}><Statistic title = "Total Market Cap" value= {millify(globalStats.totalMarketCap)} /></Col>
            <Col span = {12}><Statistic title = "Total 24th Volume" value= {millify(globalStats.total24hVolume)} /></Col>
            <Col span = {12}><Statistic title = "Total Markets" value= {millify(globalStats.totalMarkets)} /></Col>
        </Row>
        <motion.div className='home-heading-container' initial = {{x : 2000}} animate = {{x : 0}} transition={{type :'easeOut' , stiffness : 100, duration : 2}}>
            <Title level = {2} className = "home-title">Top 10 Cryptocurrencies in the world</Title>
            <Title level = {3} className= "show-more">
                <Link to = "/cryptocurrency">Show More</Link>
            </Title>
        </motion.div>
        <Cryptocurrencies simplified = {true}/>
        <motion.div className='home-heading-container' initial = {{x : 2000}} animate = {{x : 0}} transition={{type :'easeOut' , stiffness : 100, duration : 3}}>
            <Title level = {2} className="home-title">Latest Crypto News</Title>
            <Title level = {3} className="show-more">
                <Link to = "/news">Show More</Link>
            </Title>
        </motion.div>
        <News simplified/>
    </>
  )
}

export default Homepage