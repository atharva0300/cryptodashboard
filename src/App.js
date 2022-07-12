import './App.css';
import React from 'react';
import { Route , Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import {Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Homepage, Cryptocurrencies , CryptoDetails , News  } from './components';

function App() {
  return (
    <div className="app">
      <div className = "navbar">
          <Navbar />
      </div>
      <div className='main'>
          <Layout>
            <div className='routes'>
              <Routes>
                <Route exact path = "/cryptodashboard" element = {<Homepage />} />
                <Route exact path = "/cryptodashboard/exchanges" element = {<Exchanges />} />
                <Route exact path = "/cryptodashboard/cryptocurrency" element = {<Cryptocurrencies />} />
                <Route exact path = '/cryptodashboard/crypto/:coinUUID' element = {<CryptoDetails />} />
                <Route exact path = "/cryptodashboard/news" element = {<News />} />
              </Routes>
            </div>
          </Layout>
      <div className='footer'>
          <Typography.Title level = {5} style = {{color : 'white', textAlign : 'center'}}>
            Cryptodashboard<br/>
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to = "/">Home</Link>
            <Link to = "/exchanges">Exchanges</Link>
            <Link to = "/news">News</Link>
          </Space>
      </div>
      </div>
    </div>
  );
}

export default App;
