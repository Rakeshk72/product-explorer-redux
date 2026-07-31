// Link navigates to the selected product's details page.
import { Link } from "react-router-dom";

// Redux hooks read favorites and dispatch actions.
import {
  useDispatch,
  useSelector,
} from "react-redux";

// Import the actions used to add and remove favorites.
import {
  addFavorite,
  removeFavorite,
} from "../features/favorites/favoritesSlice.js";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  // Check whether this product is already saved.
  const isFavorite = useSelector((state) =>
    state.favorites.items.some(
      (favorite) => favorite.id === product.id
    )
  );

  // Add or remove the product depending on its current state.
  function handleFavorite() {
    if (isFavorite) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(addFavorite(product));
    }
  }

  return (
    <article className="product-card">
      {/* Product image received from the API */}
      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <div className="product-card-content">
        {/* Product category */}
        <p className="category">
          {product.category}
        </p>

        {/* Product title */}
        <h2>{product.title}</h2>

        {/* Product price */}
        <p className="price">${product.price}</p>

        {/* Product rating */}
        <p>Rating: {product.rating}</p>

        <div className="card-actions">
          {/* Route must match /products/:productId */}
          <Link to={`/products/${product.id}`}>
            View Details
          </Link>

          {/* Toggle favorite status */}
          <button
            type="button"
            onClick={handleFavorite}
          >
            {isFavorite
              ? "Remove Favorite"
              : "Add Favorite"}
          </button>
        </div>
      </div>
    </article>
  );
}