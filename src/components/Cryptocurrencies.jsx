import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card , Row , Col , Input} from 'antd';
import { useState, useEffect } from 'react';


import {useGetCryptosQuery} from '../services/cryptoApi';

function Cryptocurrencies({simplified}) {
  const count = simplified ? 10 : 100;
  // number of cards to display => count


  // destructuring the data
  const { data : cryptosList, isFetching} = useGetCryptosQuery(count);
  const [searchTerm , setSearchTerm] = useState('')

  // creating a usestate field
  const [cryptos , setCryptos] = useState(cryptosList?.data?.coins);

  console.log(cryptos);

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
    // searching an filtering out the searched item from the list of Crypto List

    setCryptos(filteredData);
    // setting the filter data

    // useEffect is a combination of component did mount and component did update

  }, [cryptosList, searchTerm])

  if(isFetching){
    return 'Loading...';
  }

  return (
    <>
    {!simplified && (
      <div className='search-crypto'>
        <Input placeholder = "Search Cryptocurrency" onChange = {(e) => setSearchTerm(e.target.value)} />
      </div>
    )}

      <Row gutter = {[32 , 32]} className= "crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs = {24} sm = {12} lg = {6} className = "crypto-card" key = {currency.uuid}>
            <Link to = {`/crypto/${currency.uuid}`}>
              <Card title = {`${currency.rank}. ${currency.name}`} extra = {<img className='crypto-image' src = {currency.iconUrl} />} hoverable>
                <p>Price : {millify(currency.price)}</p>
                <p>Price : {millify(currency.marketCap)}</p>
                <p>Price : {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}

      </Row>
    </>
  )
}

export default Cryptocurrencies