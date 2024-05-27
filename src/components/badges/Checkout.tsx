import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../rtk/store";
import { checkout } from "../../rtk/products/productsSlice";
import "../styles/cart.css";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartPrice = useSelector(
    (state: RootState) => state.products.totalCartPrice
  );

  return (
    <div>
      <span className="cartText">Checkout</span>
      {/* Frame */}
      <div className="cartFrame">
        <span>
          Total Price:{" "}
          <span>
            {cartPrice?.toFixed(2) ? `${cartPrice.toFixed(2)}₺` : "0₺"}
          </span>
        </span>
        <button
          className="primaryButton"
          disabled={cartPrice === 0}
          onClick={() => dispatch(checkout())}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;
