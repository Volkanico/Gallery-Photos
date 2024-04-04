import { combineReducers } from 'redux';
import photosReducer from './photosReducer';

const rootReducer = combineReducers({
  photos: photosReducer,
  // Agrega otros reducers aquí si es necesario
});

export default rootReducer;
