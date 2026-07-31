// Import createSlice from Redux Toolkit.
import { createSlice } from "@reduxjs/toolkit";

// Load saved favorites from localStorage.
function loadFavorites() {
  try {
    const savedFavorites = localStorage.getItem("favoriteProducts");

    return savedFavorites
      ? JSON.parse(savedFavorites)
      : [];
  } catch (error) {
    console.error("Unable to load favorites:", error);
    return [];
  }
}

// Save favorites to localStorage.
function saveFavorites(favorites) {
  try {
    localStorage.setItem(
      "favoriteProducts",
      JSON.stringify(favorites)
    );
  } catch (error) {
    console.error("Unable to save favorites:", error);
  }
}

// Initial Redux state.
const initialState = {
  items: loadFavorites(),
};

// Create the favorites slice.
const favoritesSlice = createSlice({
  name: "favorites",

  initialState,

  reducers: {
    // Add a product to favorites.
    addFavorite: (state, action) => {
      const product = action.payload;

      const alreadyExists = state.items.some(
        (favorite) => favorite.id === product.id
      );

      if (!alreadyExists) {
        state.items.push(product);
        saveFavorites(state.items);
      }
    },

    // Remove a product from favorites.
    removeFavorite: (state, action) => {
      state.items = state.items.filter(
        (product) => product.id !== action.payload
      );

      saveFavorites(state.items);
    },

    // Clear all favorite products.
    clearFavorites: (state) => {
      state.items = [];
      saveFavorites(state.items);
    },
  },
});

// Export Redux actions.
export const {
  addFavorite,
  removeFavorite,
  clearFavorites,
} = favoritesSlice.actions;

// Export the reducer.
export default favoritesSlice.reducer;