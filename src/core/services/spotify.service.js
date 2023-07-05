import axios from 'axios';
const BASE_URL = 'https://spotify-scraper.p.rapidapi.com/v1';
const headers = {
  'X-RapidAPI-Key': 'e3a24b9bf5msh6f8a262a1ce86c2p1ed27cjsn8286f14a5f0b',
  'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com',
};

export const UniteService = {
  async getHomePage() {
    try {
      const response = await axios.request({
        method: 'GET',
        url: `${BASE_URL}/home`,
        headers,
      });
      if(response.ok) {
        return response.data;
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  },
}
