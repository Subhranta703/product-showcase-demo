import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Smart Watch", desc: "Track health & fitness.", price: 120, img: "/images/product1.jpg" },
  { id: 2, name: "Wireless Earbuds", desc: "Premium sound quality.", price: 80, img: "/images/product2.jpg" },
  { id: 3, name: "Gaming Mouse", desc: "High precision for gamers.", price: 60, img: "/images/product3.jpg" },
];

function Products({ addToCart }) {
  return (
    <section id="products" className="product-section">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} addToCart={() => addToCart(p)} />
        ))}
      </div>
    </section>
  );
}

export default Products;
