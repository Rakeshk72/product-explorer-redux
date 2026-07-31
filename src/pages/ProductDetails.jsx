import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../features/favorites/favoritesSlice";

export default function ProductDetails() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  // Fetch one product using the product ID.
  useEffect(() => {
    async function getProduct() {
      try {
        setStatus("loading");

        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );

        if (!response.ok) {
          throw new Error("Product could not be found.");
        }

        const data = await response.json();

        setProduct(data);
        setStatus("succeeded");
      } catch (error) {
        setError(error.message);
        setStatus("failed");
      }
    }

    getProduct();
  }, [productId]);

  function handleFavorite() {
    dispatch(addFavorite(product));
  }

  if (status === "loading") {
    return <p>Loading product details...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="product-details">
      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <div>
        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <p>
          <strong>Price:</strong> ${product.price}
        </p>

        <p>
          <strong>Rating:</strong> {product.rating}
        </p>

        <button onClick={handleFavorite}>
          Add to Favorites
        </button>
      </div>
    </section>
  );
}
