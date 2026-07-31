import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  // Search products when the form is submitted.
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(fetchProducts(searchTerm.trim()));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
}