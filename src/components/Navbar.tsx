import { IconBriefcase, IconSearch, IconUser } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { filterProductsForSearch } from "../rtk/products/productsSlice";
import { RootState } from "../rtk/store";
import { useNavigate } from "react-router-dom";
import "./styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const cartPrice = useSelector(
    (state: RootState) => state.products.totalCartPrice
  );
  const dispatch = useDispatch();
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterProductsForSearch(event.target.value.toLowerCase().trim()));
  };

  return (
    <div className="navbarFull">
      <div className="navbar">
        <div className="navbarLogo" onClick={() => navigate(`/`)}>
          Eteration
        </div>
        <div className="navbarSearchDiv navbarSearchHidden">
          <IconSearch size={20} color="#918888" />
          <input
            className="searchInput"
            type="text"
            placeholder="Search"
            onChange={handleSearch}
          />
        </div>
        <div className="headerSettings">
          <div className="headerFrame">
            <IconBriefcase size={24} color="#FFF" />
            <span style={{ width: "40px", textAlign: "right" }}>
              {cartPrice ? `${cartPrice.toFixed(2)}₺` : "00.0₺"}
            </span>
          </div>
          <div className="headerFrame">
            <IconUser size={24} color="#FFF" />
            <span>Cihan</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
