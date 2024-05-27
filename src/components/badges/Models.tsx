import { IconSearch } from "@tabler/icons-react";
import { RootState } from "../../rtk/store";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setFilterByModel } from "../../rtk/products/productsSlice";
import "../styles/cart.css";

const Models = () => {
  const dispatch = useDispatch();
  const models = useSelector((state: RootState) => state.products.models);
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const handleModelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const model = event.target.value;
    if (selectedModel === model) {
      setSelectedModel("");
      dispatch(setFilterByModel(""));
    } else {
      setSelectedModel(model);
      dispatch(setFilterByModel(model));
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredModels = models?.filter((model) =>
    model?.toLowerCase()?.includes(search?.toLowerCase())
  );

  return (
    <div>
      <span className="cartText">Models</span>
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
          {filteredModels?.map((model, i) => (
            <div className="cartCheckbox" key={i}>
              <input
                type="checkbox"
                id={model}
                name="model"
                value={model}
                checked={selectedModel === model}
                onChange={handleModelChange}
              />
              <label htmlFor={model}>{model}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Models;
