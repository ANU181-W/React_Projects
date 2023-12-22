import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slice";
import { toast } from "react-hot-toast";

const CartProduct = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.info("Item Removed");
  };

  return (
    <div className="i">
      <div className="p">
        <div className="nm">
          <img className="r" src={item.image} />
        </div>
        <div className="k">
          <h1 className="t">{item.title}</h1>
          <h1 className="d">{item.description}</h1>
          <div className="z">
            <p className="c">${item.price}</p>
            <div className="b" onClick={removeFromCart}>
              <AiFillDelete className="q" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
