import axios from "axios";
const options = {
  method: 'GET',
  url: 'https://spotify-scraper.p.rapidapi.com/v1/home',
  headers: {
    'X-RapidAPI-Key': '251bebe71amshc2bb86f654ff9c3p16a485jsn93c4a361d9c1',
    'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
  }
};
export const SpotyfyService = {
    async getHomePage(limit: number, offset: number) {
        try {
            const response = await axios.request(options);
            return response.data.genres
        } catch (error) {
            console.error(error);
        }
    },
}


