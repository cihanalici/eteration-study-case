import { useEffect } from "react";
import { useGetProductsQuery } from "@/rtk/products/productsAPI";
import { useDispatch } from "react-redux";
import Spinner from "@/components/states/Spinner";
import APIError from "@/components/states/APIError";
import SortBy from "@/components/badges/SortBy";
import Brands from "@/components/badges/Brands";
import Models from "@/components/badges/Models";
import Products from "@/components/product/Products";
import Cart from "@/components/badges/Cart";
import Checkout from "@/components/badges/Checkout";
import { resetFilters } from "@/rtk/products/productsSlice";

import "@/App.css";

const Home = () => {
  const dispatch = useDispatch();
  const { isError, isLoading } = useGetProductsQuery();

  useEffect(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  if (isLoading) return <Spinner />;

  if (isError) return <APIError />;

  return (
    <div className="mainFrame">
      <div className="cartsFrame">
        <SortBy />
        <Brands />
        <Models />
      </div>

      <Products />
      <div className="cartsFrame">
        <Cart />
        <Checkout />
      </div>
    </div>
  );
};

export default Home;
