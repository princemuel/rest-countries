import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v2';

export const client = axios.create({
  baseURL: BASE_URL,
});
