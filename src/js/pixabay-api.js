import axios from 'axios';

export async function fetchPhotos(query, currentPage) {
  const url = 'https://pixabay.com/api/';
  const params = {
    key: '44324365-be3070df1c049607fe38536c0',
    q: query,
    per_page: 15,
    page: currentPage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  try {
    const { data } = await axios.get(url, { params });
    return data;
  } catch (error) {
    console.error('Error fetching photos:', error);
  }
}
