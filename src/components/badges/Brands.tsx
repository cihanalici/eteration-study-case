import { IconSearch } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "../styles/cart.css";
import { RootState } from "@/rtk/store";
import { setFilterByBrand } from "@/rtk/products/productsSlice";

const Brands = () => {
  const dispatch = useDispatch();
  const brands = useSelector((state: RootState) => state.products.brands);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const brand = event.target.value;
    if (selectedBrand === brand) {
      setSelectedBrand("");
      dispatch(setFilterByBrand(""));
    } else {
      setSelectedBrand(brand);
      dispatch(setFilterByBrand(brand));
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredBrands = brands?.filter((brand) =>
    brand?.toLowerCase()?.includes(search?.toLowerCase())
  );

  return (
    <div>
      <span className="cartText">Brands</span>
      <div className="cartFrame">
        <div className="searchDiv">
          <IconSearch size={20} color="#918888" />
          <input
            className="searchInput"
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleSearch}
          />
        </div>

        {/* Checkboxes apple, samsung, huwae etc. */}
        <div className="cartsCheckboxFrame">
          {filteredBrands?.map((brand, i) => (
            <div className="cartCheckbox" key={i}>
              <input
                type="checkbox"
                id={brand}
                name="brand"
                value={brand}
                checked={selectedBrand === brand}
                onChange={handleBrandChange}
              />
              <label htmlFor={brand}>{brand}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
