import axios from "axios";

export const coinApi = axios.create({
    baseURL: 'https://api.coinpaprika.com/v1'
});

export const usersApi = axios.create({
    baseURL: 'http://localhost:3001'
});
