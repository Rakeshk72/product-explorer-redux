// Import routing components.
import { Route, Routes } from "react-router-dom";

// Import the shared layout.
import Layout from "./components/Layout.jsx";

// Import page components.
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      {/* Layout keeps the Navbar on every page. */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route
          path="/favorites"
          element={<Favorites />}
        />

        <Route
          path="/products/:productId"
          element={<ProductDetails />}
        />

        {/* Show NotFound for unmatched routes. */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}