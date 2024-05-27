import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { productsReducer } from "@/rtk/products/productsSlice";
import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/rtk/store";
import { MemoryRouter } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import "@testing-library/jest-dom"; // jest-dom matchers

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

describe("ProductDetail", () => {
  it("should render product details", () => {
    render(
      <React.StrictMode>
        <Provider store={customStore}>
          <PersistGate loading={null} persistor={persistor}>
            <MemoryRouter initialEntries={["/product/0"]} initialIndex={0}>
              <ProductDetail />
            </MemoryRouter>
          </PersistGate>
        </Provider>
      </React.StrictMode>
    );

    expect(screen.getByText("Product 0")).toBeInTheDocument();
  });
});
