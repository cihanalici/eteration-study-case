import { IconBriefcase, IconSearch, IconUser } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { filterProductsForSearch } from "../rtk/products/productsSlice";
import { RootState } from "../rtk/store";
import { useNavigate } from "react-router-dom";
import "./styles/navbar.css";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const cartPrice = useSelector(
    (state: RootState) => state.products.totalCartPrice
  );
  const dispatch = useDispatch();

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
            onChange={(e) => setSearchText(e.target.value)}
            // on enter key
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                dispatch(
                  filterProductsForSearch(searchText?.toLowerCase()?.trim())
                );
              }
            }}
          />
        </div>
        <div className="headerSettings">
          <div className="headerFrame">
            <IconBriefcase size={24} color="#FFF" />
            <span style={{ width: "40px", textAlign: "right" }}>
              {cartPrice ? `${cartPrice?.toFixed(2)}₺` : "00.0₺"}
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
