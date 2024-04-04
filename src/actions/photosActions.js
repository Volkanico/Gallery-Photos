export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';

export const fetchPhotos = (query, page = 1) => {
  return async (dispatch) => {
    try {
      //console.log(query)
      const API_KEY = import.meta.env.VITE_SLASH_API_KEY_TWO
      const URL = `https://api.unsplash.com/search/photos/?page=${page}&client_id=${API_KEY}&query=${query}`;
      
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data)
      console.log(URL)
      dispatch({ type: 'FETCH_PHOTOS_SUCCESS', payload: data.results });
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };
};


