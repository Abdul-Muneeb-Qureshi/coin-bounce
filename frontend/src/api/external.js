import axios from "axios";
const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

const NEWS_API_ENDPOINT = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${NEWS_API_KEY}`;
const CRYPTO_API_ENDPOINT = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`


export const getNews = async () =>{

    let response;

    try{
        response = await axios.get(NEWS_API_ENDPOINT)
        response = response.data.articles.slice(0,15)
    }
    catch(error){
        return error;
    }
    return response;

} 

export const getCrypto = async () =>{

    let response;

    try{
        response = await axios.get(CRYPTO_API_ENDPOINT)
        response = response.data
    }
    catch(error){
        return error;
    }
    return response;

} 