export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';

export const fetchPhotos = (query) => {
    return async (dispatch) => {
      try {
        const API_KEY = import.meta.env.VITE_SLASH_API_KEY
        const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${query}`;
        
        const response = await fetch(URL);
        const data = await response.json();
        
        dispatch({ type: 'FETCH_PHOTOS_SUCCESS', payload: data.results });
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };
  };
  
