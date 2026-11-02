import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  return (
    <div className="container mt-4">
      <h2>Cart Details</h2>

      {cartItems.length === 0 ? (
        <p>No Items Added</p>
      ) : (
        cartItems.map((item, index) => (
          <div
            key={index}
            className="card p-3 mb-3"
          >
            <img
              src={item.image}
              alt={item.title}
              width="150"
            />

            <h4>{item.title}</h4>

            <p>{item.desc}</p>

            <strong>{item.price}</strong>
            <div className="mt-2">
              <button
                className="btn btn-danger"
                onClick={() => dispatch(removeFromCart(index))}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;