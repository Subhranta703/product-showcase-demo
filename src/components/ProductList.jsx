import React, { useState } from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    name: "Smart Phone",
    desc: "Track your health and stay connected.",
    price: 1200,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyA3tuNRMjfSx4wtPHUjFmWh5ySatDZd1yQ&s",
    name: "Wireless Earbuds",
    desc: "Experience pure sound freedom.",
    price: 80,
  },
  {
    img: "https://m.media-amazon.com/images/I/61qpQ7ZsSmL.jpg",
    name: "Gaming Mouse",
    desc: "Precision and comfort for pro gamers.",
    price: 60,
  },
];
function ProductList() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Prevent duplicates
    if (!cart.some((item) => item.name === product.name)) {
      setCart((prev) => [...prev, product]);
      alert(`${product.name} added to cart!`);
    } else {
      alert(`${product.name} is already in your cart.`);
    }
  };

  const removeFromCart = (name) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  return (
    <section id="products" className="py-16 bg-gray-100 dark:bg-gray-900 text-center min-h-screen">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">Our Products</h2>

      {/* Product Grid */}
      <div className="flex flex-wrap justify-center gap-10 px-6">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} addToCart={() => addToCart(p)} />
        ))}
      </div>

      {/* Cart Section */}
      <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 w-11/12 sm:w-2/3 mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center justify-center gap-2">
          🛒 Your Cart
        </h3>

        {cart.length > 0 ? (
          <ul className="divide-y divide-gray-300 dark:divide-gray-700">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-4 px-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                      {item.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">${item.price}</p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.name)}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm transition-all"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 mt-4">Your cart is empty.</p>
        )}
      </div>
    </section>
  );
}

export default ProductList;