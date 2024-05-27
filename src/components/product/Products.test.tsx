import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Products from "./Products";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "@/rtk/products/productsSlice";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/rtk/store";
import React from "react";

const customStore = configureStore({
  reducer: {
    products: productsReducer,
  },
  preloadedState: {
    products: {
      products: Array.from({ length: 20 }, (_, i) => ({
        id: String(i),
        name: `Product ${i}`,
        price: `${(i + 1) * 10}₺`,
        image: `src/assets/product_${i}.png`,
        description: `Description ${i}`,
        model: `Model ${i}`,
        brand: `Brand ${i}`,
        createdAt: new Date().toISOString(),
      })),
      filteredProducts: Array.from({ length: 20 }, (_, i) => ({
        id: String(i),
        name: `Product ${i}`,
        price: `${(i + 1) * 10}₺`,
        image: `src/assets/product_${i}.png`,
        description: `Description ${i}`,
        model: `Model ${i}`,
        brand: `Brand ${i}`,
        createdAt: new Date().toISOString(),
      })),
      brands: [],
      models: [],
      carts: [],
      totalCartPrice: 0,
      loading: false,
      error: null,
      selectedBrand: null,
      selectedModel: null,
      sortOption: null,
    },
  },
});

// İT uses redux toolkit to manage the state of the application.
describe("Products", () => {
  it("should render 12 products on the first page", () => {
    render(
      <React.StrictMode>
        <Provider store={customStore}>
          <PersistGate loading={null} persistor={persistor}>
            <MemoryRouter>
              <Products />
            </MemoryRouter>
          </PersistGate>
        </Provider>
      </React.StrictMode>
    );

    // Debugging logs
    const productCards = screen.getAllByAltText("product");
    console.log("Rendered Product Cards:", productCards.length);
    productCards.forEach((card, index) =>
      console.log(`Product ${index + 1}:`, card)
    );

    expect(productCards.length).toBe(12);
  });
});
