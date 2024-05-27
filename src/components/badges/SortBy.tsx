import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSortProducts } from "../../rtk/products/productsSlice";
import "../styles/cart.css";

const SortBy = () => {
  const dispatch = useDispatch();
  const [sortOption, setSortOption] = useState<string>("");

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortOption(event.target.value);
    dispatch(setSortProducts(event.target.value));
  };

  return (
    <div>
      <span className="cartText">Sort By</span>
      <div className="cartFrame">
        <div className="cartRadio">
          <input
            type="radio"
            id="newToOld"
            name="sort"
            value="newToOld"
            checked={sortOption === "newToOld"}
            onChange={handleSortChange}
          />
          <label htmlFor="newToOld">New to Old</label>
        </div>
        <div className="cartRadio">
          <input
            type="radio"
            id="oldToNew"
            name="sort"
            value="oldToNew"
            checked={sortOption === "oldToNew"}
            onChange={handleSortChange}
          />
          <label htmlFor="oldToNew">Old to New</label>
        </div>
        <div className="cartRadio">
          <input
            type="radio"
            id="priceHighToLow"
            name="sort"
            value="priceHighToLow"
            checked={sortOption === "priceHighToLow"}
            onChange={handleSortChange}
          />
          <label htmlFor="priceHighToLow">Price High to Low</label>
        </div>
        <div className="cartRadio">
          <input
            type="radio"
            id="priceLowToHigh"
            name="sort"
            value="priceLowToHigh"
            checked={sortOption === "priceLowToHigh"}
            onChange={handleSortChange}
          />
          <label htmlFor="priceLowToHigh">Price Low to High</label>
        </div>
      </div>
    </div>
  );
};

export default SortBy;
