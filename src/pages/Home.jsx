// Import useEffect to run code when the page first loads.
import { useEffect } from "react";

// Import Redux hooks.
import { useDispatch, useSelector } from "react-redux";

// Import the SearchBar component.
import SearchBar from "../components/SearchBar.jsx";

// Import the ProductList component.
import ProductList from "../components/ProductList.jsx";

// Import the async action that fetches products.
import { fetchProducts } from "../features/products/productsSlice.js";

export default function Home() {
  // Get the Redux dispatch function.
  const dispatch = useDispatch();

  // Read product information from the Redux store.
  const {
    items: products,
    status,
    error,
  } = useSelector((state) => state.products);

  // Fetch all products when the Home page first loads.
  useEffect(() => {
    // Fetch only when products have not already been requested.
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <>
      <h1>Product Explorer</h1>

      {/* Display the product search form. */}
      <SearchBar />

      {/* Display a loading message while products are being fetched. */}
      {status === "loading" && <p>Loading products...</p>}

      {/* Display an error message if the API request fails. */}
      {status === "failed" && (
        <p className="error-message">
          Error: {error}
        </p>
      )}

      {/* Display products after the request succeeds. */}
      {status === "succeeded" && (
        <ProductList products={products} />
      )}
    </>
  );
}