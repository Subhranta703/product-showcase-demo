import React from "react";

function ProductCard({ img, name, desc, price, addToCart }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 p-5 w-full sm:w-[300px] flex flex-col items-center">
      <img
        src={img}
        alt={name}
        className="w-full h-56 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{name}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 text-center">{desc}</p>
      <h4 className="text-lg font-bold text-gray-800 dark:text-yellow-300 mb-4">${price}</h4>
      <button
        onClick={() => addToCart(name)}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
