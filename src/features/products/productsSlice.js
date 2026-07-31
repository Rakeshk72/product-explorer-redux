// Import Redux Toolkit functions.
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Fetch products from the DummyJSON API.
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (searchTerm = "") => {
    // Choose the correct API URL.
    const url = searchTerm
      ? `https://dummyjson.com/products/search?q=${searchTerm}`
      : "https://dummyjson.com/products";

    // Send the request.
    const response = await fetch(url);

    // Throw an error if the request fails.
    if (!response.ok) {
      throw new Error("Failed to fetch products.");
    }

    // Convert the response into JSON.
    const data = await response.json();

    // Return only the products array.
    return data.products;
  }
);

// Initial Redux state.
const initialState = {
  items: [],
  status: "idle",
  error: null,
};

// Create the products slice.
const productsSlice = createSlice({
  name: "products",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      // Runs while the request is in progress.
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null; // Clear any previous error.
      })

      // Runs when the request succeeds.
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })

      // Runs if the request fails.
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Export the reducer.
export default productsSlice.reducer;