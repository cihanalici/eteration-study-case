import { useDispatch, useSelector } from "react-redux";

import "../styles/cart.css";
import { RootState } from "@/rtk/store";
import { truncateProductName } from "@/rtk/products/productsHelper";
import {
  addToCart,
  reduceAndRemoveFromCart,
} from "@/rtk/products/productsSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state: RootState) => state?.products?.carts);

  return (
    <div>
      <span className="cartText">Cart</span>
      {/* Frame */}
      <div className="cartFrame">
        {/* Content */}
        {carts?.map((cart, i) => (
          <div className="cartContent" key={i}>
            <div className="cartContentDesc">
              <span
                className="cartProductBrandMobileDisabled"
                data-full-name={cart?.product?.name}
              >
                {truncateProductName(cart?.product?.name, 10)}
              </span>
              <p className="cartProductBrandMobile">{cart?.product?.name}</p>
              <span>{cart?.product?.price}₺</span>
            </div>
            <div className="cartContentCount">
              <span
                onClick={() => dispatch(reduceAndRemoveFromCart(cart?.product))}
              >
                -
              </span>
              <span>{cart?.quantity}</span>
              <span onClick={() => dispatch(addToCart(cart?.product))}>+</span>
            </div>
          </div>
        ))}

        {carts?.length === 0 && (
          <span className="emptyCardText">No items in the cart</span>
        )}
      </div>
    </div>
  );
};

export default Cart;
