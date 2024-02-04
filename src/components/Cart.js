import { useDispatch, useSelector } from "react-redux";
import { ItemList } from "./index";
import { clearCart } from "../../utils/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
      <button className="m-2 p-1 px-2 font-bold text-xl border border-black rounded-lg" onClick={handleClearCart} > Clear Cart </button>

      {cartItems.length === 0 && <h2 className="font-bold text-lg">Cart is empty</h2>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
