import { useDispatch, useSelector } from "react-redux";
import {
  clearFavorites,
  removeFavorite,
} from "../features/favorites/favoritesSlice";

export default function Favorites() {
  const dispatch = useDispatch();

  // Get favorite products from Redux.
  const favorites = useSelector(
    (state) => state.favorites.items
  );

  // Remove one product from favorites.
  function handleRemove(productId) {
    dispatch(removeFavorite(productId));
  }

  // Remove all favorite products.
  function handleClear() {
    dispatch(clearFavorites());
  }

  return (
    <section>
      <h1>Favorites</h1>

      {favorites.length === 0 ? (
        <p>No favorite products yet.</p>
      ) : (
        <>
          <button onClick={handleClear}>
            Clear All Favorites
          </button>

          <div className="product-list">
            {favorites.map((product) => (
              <article
                className="product-card"
                key={product.id}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                />

                <h3>{product.title}</h3>

                <p>${product.price}</p>

                <button
                  onClick={() => handleRemove(product.id)}
                >
                  Remove
                </button>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
}