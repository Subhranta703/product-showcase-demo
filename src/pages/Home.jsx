import React from "react";
import ProductList from "../components/ProductList";

function Home() {
  return (
    <div id="home">
      <header className="text-center py-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
        <img
          src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80"
          alt="banner"
          className="w-full h-80 object-cover"
        />
      </header>

      <ProductList />
    </div>
  );
}

export default Home;
