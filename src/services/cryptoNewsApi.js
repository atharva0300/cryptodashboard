import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'c2ee5a3047msh5e7286b9f94796dp10b74djsnedbc3cd2ea56',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}



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