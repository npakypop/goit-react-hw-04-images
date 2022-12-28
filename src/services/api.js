import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '31540043-77ba2a95f38c13f834341b2a6';
//pixabay.com/api/?q=cat&page=1&per_page=40&orientation=horizontal&image_type=photo&safesearch=true&key=31540043-77ba2a95f38c13f834341b2a6
export const getImages = async (query, page) => {
  const { data } = await axios.get('', {
    params: {
      q: query,
      page: page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return data;
};
