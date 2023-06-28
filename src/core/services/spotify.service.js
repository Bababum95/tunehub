import { Buffer } from 'buffer';
const BASE_URL = 'https://api.spotify.com/v1';

export const getAccessToken = async () => {
  const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`,
      ).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.json();
};

export const getCategories = async () => {
  const { access_token } = await getAccessToken();
  const response = await fetch(`${BASE_URL}/browse/categories`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response.json();
};
export const getPlaylistsCategoriey = async (categorieyId, limit) => {
  const { access_token } = await getAccessToken();
  const response = await fetch(`${BASE_URL}/browse/categories/${categorieyId}/playlists?limit=${limit}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response.json();
};

export const getPlaylist = async (id) => {
  const { access_token } = await getAccessToken();
  const response = await fetch(`${BASE_URL}/playlists/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response.json();
};
