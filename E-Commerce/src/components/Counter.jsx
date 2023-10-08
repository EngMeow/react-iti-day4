import React, { useContext } from "react";
import { CounterContext } from "../context/counterContext";

export function Counter() {
  const value = useContext(CounterContext);
  const { cart, count, decrease, removeFromCart } = value;

  return (
    <div
      className="bg-primary m-5 text-light p-2"
      style={{ minHeight: "50vh", backgroundColor: "#F8B400" }}
    >
      <h3 className="text-center mb-3">Shopping Cart</h3>
      {count === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cart && Array.isArray(cart) && cart.length > 0 ? (
            cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item bg-dark d-flex justify-content-between align-items-center"
              >
                <div className="text-light">
                  {item.productName} - ${item.price}
                  <br />
                  Product Quantity: {item.quantity}
                </div>
                <button
                  className="btn btn-danger text-light btn-sm"
                  onClick={() => {
                    removeFromCart(item.id);
                    decrease();
                  }}
                >
                  Remove
                </button>
              </li>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </ul>
      )}
    </div>
  );
}
