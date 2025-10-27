import React from "react";

function Cart({ cart }) {
  return (
    <section className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, i) => (
            <li key={i}>
              <img src={item.img} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Cart;
