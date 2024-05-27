import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "@/rtk/store";
import { isProductInCart } from "@/rtk/products/productsHelper";
import { addToCart, removeProductFromCart } from "@/rtk/products/productsSlice";
import Cart from "@/components/badges/Cart";
import Checkout from "@/components/badges/Checkout";
import "@/components/styles/productdetail.css";
import Spinner from "@/components/states/Spinner";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  // params'ın testi için dökümantasyon yardımı yok
  // const params = useParams();
  const products = useSelector((state: RootState) => state.products.products);
  const cart = useSelector((state: RootState) => state.products.carts);

  // console.log(location?.pathname?.split("/")?.[2]);

  if (!products) {
    return <Spinner />;
  }

  const product = products?.find(
    (product) => product?.id === location?.pathname?.split("/")?.[2]
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const productCardHandler = (id: string) => {
    const product = products?.find((product) => product?.id === id);
    if (!product) return;
    // eğer ürün sepete eklenmişse ürünü sepetten çıkar
    if (isProductInCart(id, cart)) {
      dispatch(removeProductFromCart(product));
      return;
    } else {
      // ürünü sepete ekle
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="mainFrame">
      <div className="productDetailFrame">
        <div className="productDetailImage">
          <img
            src={product?.image || "/src/assets/placeholderb.png"}
            alt="product"
          />
        </div>

        <div className="productDetailInfo">
          <h1>{product?.name}</h1>
          <p>
            Price: {product?.price ? parseFloat(product.price)?.toFixed(2) : 0}₺
          </p>
          <button
            className={
              isProductInCart(product?.id || String(), cart)
                ? "removeButton"
                : "primaryButton"
            }
            onClick={() => productCardHandler(product?.id || String())}
          >
            {isProductInCart(product?.id || String(), cart)
              ? "Remove from Cart"
              : "Add to Cart"}
          </button>
          <span>
            {product?.description ||
              "No description available for this product."}
          </span>
        </div>
      </div>

      <div className="cartsFrame">
        <Cart />
        <Checkout />
      </div>
    </div>
  );
};

export default ProductDetail;
