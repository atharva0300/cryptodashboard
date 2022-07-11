import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'c2ee5a3047msh5e7286b9f94796dp10b74djsnedbc3cd2ea56',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({url , headers : cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath : 'cryptoNewsApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder) => ({
        // returns an object
        // specifying endpoints
        getCryptoNews : builder.query({
            query : ({ newsCategory , count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})

export const { useGetCryptoNewsQuery} = cryptoNewsApi;

/*
const options = {
  method: 'GET',
  url: 'https://bing-news-search1.p.rapidapi.com/news',
  params: {safeSearch: 'Off', textFormat: 'Raw'},
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'c2ee5a3047msh5e7286b9f94796dp10b74djsnedbc3cd2ea56',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
};
*/