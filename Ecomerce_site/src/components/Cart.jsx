import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Cart" + cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="Cart-list">
          <div className="Cart-ele">
            {cart.map((item, index) => {
              return (
                <div>
                  <CartProduct key={item.id} item={item} itemIndex={index} />
                  <hr></hr>
                </div>
              );
            })}
          </div>

          <div className="checkout">
            <div className="l">
              <div className="m">
                <div className="y">Your Cart</div>
                <div className="s">Summary</div>
                <p className="f">
                  <span>Total Items: {cart.length}</span>
                </p>
              </div>
            </div>

            <div className="amount-ele">
              <p className="f">
                <span>Total Amount:</span> ${totalAmount}
              </p>
              <button className="check">CheckOut Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty">
          <h1>Your cart is empty!</h1>
          <Link to={"/"}>
            <button className="shop-now">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
