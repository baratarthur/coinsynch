import axios from "axios";

export const coinApi = axios.create({
    baseURL: 'https://rest.coinapi.io/v1'
});