// routesSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const routesSlice = createSlice({
  name: 'routes',
  initialState: {
    currentRoute: '/',
  },
  reducers: {
    setRoute: (state, action) => {
      state.currentRoute = action.payload;
    },
  },
});

export const { setRoute } = routesSlice.actions;

export const selectCurrentRoute = (state) => state.routes.currentRoute;

export default routesSlice.reducer;
