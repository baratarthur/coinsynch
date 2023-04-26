import axios from "axios";

export const coinApi = axios.create({
    baseURL: 'https://api.coinpaprika.com/v1'
});