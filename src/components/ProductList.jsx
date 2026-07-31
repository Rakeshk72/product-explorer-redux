import ProductCard from "./ProductCard.jsx";

export default function ProductList({ products = [] }) {
  if (products.length === 0) {
    return <p>No products matched your search.</p>;
  }

  return (
    <section className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </section>
  );
}