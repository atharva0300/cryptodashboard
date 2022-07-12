import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'c2ee5a3047msh5e7286b9f94796dp10b74djsnedbc3cd2ea56',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url , headers : cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder) => ({
        // returns an object
        // specifying endpoints
        getCryptos : builder.query({
            query : (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails : builder.query({
            query : (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory : builder.query({
            query : ({coinUUID , timePeriod}) => createRequest(`/coin/${coinUUID}/history`)
        })
    })
})

export const {
    useGetCryptosQuery,useGetCryptoDetailsQuery, useGetCryptoHistoryQuery
} = cryptoApi;

/*
const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': 'c2ee5a3047msh5e7286b9f94796dp10b74djsnedbc3cd2ea56',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
  */