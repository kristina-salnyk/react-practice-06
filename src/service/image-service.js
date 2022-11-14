import axios from 'axios';

const API_KEY = '563492ad6f9170000100000146c55add86d946d292cb4c8c18d2400f';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getImages = async (query, page) => {
  const response = await axios.request(`search?query=${query}&page=${page}`);
  return response.data;
};
