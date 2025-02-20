import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

export const FetchFromAPI = async (url) => {
  const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error('Error details:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        url: `${BASE_URL}/${url}`
    });
    throw error;
  }
};
