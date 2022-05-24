import axios from 'axios';
import BaseUrl from './BaseUrl';
// Get Currency list
export const getCurrency = () => {
  return axios.get(
    `${BaseUrl}coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=7d`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};
