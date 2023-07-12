/* eslint-disable no-console */
import axios from 'axios';
const BASE_URL = 'https://soundcloud-scraper.p.rapidapi.com/v1';
const headers = {
  'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  'X-RapidAPI-Host': 'soundcloud-scraper.p.rapidapi.com',
};

export const SoundCloudService = {
  getHomePage: async () => {
    try {
      const response = await axios.request({
        method: 'GET',
        url: `${BASE_URL}/home/details`,
        headers,
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  getPlaylistData: async (playlistId: string) => {
    try {
      const response = await axios.request({
        method: 'GET',
        url: `${BASE_URL}/playlist/metadata`,
        headers,
        params: {
          playlist: playlistId,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  getPlaylist: async (playlistId: string) => {
    try {
      const response = await axios.request({
        method: 'GET',
        url: `${BASE_URL}/playlist/tracks`,
        headers,
        params: {
          playlist: playlistId,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  getStation: async (stationId: string) => {
    try {
      const response = await axios.request({
        method: 'GET',
        url: `${BASE_URL}/station/details`,
        headers,
        params: {
          stationUrl: stationId.replace('soundcloud:system-playlists:', 'https://soundcloud.com/discover/sets/'),
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  getTrack: async (playlistId: string) => {
    try {
      const response = await axios.request({
        method: 'GET',
        url: `${BASE_URL}/track/metadata`,
        headers,
        params: {
          track: playlistId,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
