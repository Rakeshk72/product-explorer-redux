// Import configureStore from Redux Toolkit.
import { configureStore } from "@reduxjs/toolkit";

// Import the products reducer.
import productsReducer from "../features/products/productsSlice.js";

// Import the favorites reducer.
import favoritesReducer from "../features/favorites/favoritesSlice.js";

// Create the Redux store.
export const store = configureStore({
  reducer: {
    products: productsReducer,
    favorites: favoritesReducer,
  },
});