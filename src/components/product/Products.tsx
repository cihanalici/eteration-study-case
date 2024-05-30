import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../rtk/store";
import {
  addToCart,
  removeProductFromCart,
} from "../../rtk/products/productsSlice";
import {
  isProductInCart,
  truncateProductName,
} from "../../rtk/products/productsHelper";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Pagination from "./pagination/Pagination";
import "../styles/products.css";

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const cart = useSelector((state: RootState) => state.products.carts);
  const filteredProducts = useSelector(
    (state: RootState) => state.products.filteredProducts
  );
  const searchText = useSelector((state: RootState) => state.products.search);
  const itemsPerPage = 12; // Her sayfada gösterilecek ürün sayısı
  const [currentPage, setCurrentPage] = useState(1);

  console;

  const paginatedSearchProducts = () => {
    if (filteredProducts?.length > 12) {
      return filteredProducts?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
    } else {
      return filteredProducts;
    }
  };

  console.log(filteredProducts);
  console.log(paginatedSearchProducts);

  const filteredPaginatedProducts = products?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math?.ceil(
    (filteredProducts || products)?.length / itemsPerPage
  );

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

  if (filteredPaginatedProducts?.length === 0) {
    return <div className="noProductFound">No product found</div>;
  }

  return (
    <div className="productsMain">
      <div className="productsFrame">
        {(paginatedSearchProducts() || filteredPaginatedProducts)?.map(
          (product) => (
            <div className="productCard" key={product?.id}>
              <img
                src={product?.image || "src/assets/placeholder.png"}
                alt="product"
                onClick={() => navigate(`/product/${product?.id}`)}
              />
              <span
                className="productPrice"
                onClick={() => navigate(`/product/${product?.id}`)}
              >
                {product?.price} ₺
              </span>
              <span
                className="productName"
                onClick={() => navigate(`/product/${product?.id}`)}
                data-full-name={product?.name}
              >
                {truncateProductName(product?.name, 16)}
              </span>
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
            </div>
          )
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Products;
