// pages/api/hello.js

import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://vnwallstreet.top/api/inter/newsFlash/page?limit=50&start=0&uid=-1');
    const data = response.data.data;
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data: ', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
}
  