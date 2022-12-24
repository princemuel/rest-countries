import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1';

export const client = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});
