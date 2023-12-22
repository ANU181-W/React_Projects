import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slice";
import { toast } from "react-hot-toast";
const Card = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };
  return (
    <div className="card">
      <div className="card-heading">{post.title}</div>
      <div className="card-desp">
        {post.description.split(" ").slice(0, 10).join() + "..."}
      </div>
      <div className="card-img">
        <img src={post.image} alt="product" className="product" />
      </div>
      <div className="card-details">
        <div className="card-prices">${post.price}</div>
        {cart?.some((p) => p.id == post.id) ? (
          <button className="card-btn" onClick={removeFromCart}>
            Remove Item
          </button>
        ) : (
          <button className="card-btn" onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
