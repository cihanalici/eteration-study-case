import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productsAPI } from "./productsAPI";
import { InitialState, Product } from "../../types";
import { applyAllFilters } from "./productsHelper";
import { toast } from "react-toastify";

const initialState: InitialState = {
    products: [],
    filteredProducts: [],
    brands: [],
    models: [],
    carts: [],
    totalCartPrice: 0,
    loading: false,
    error: null,
    selectedBrand: null,
    selectedModel: null,
    sortOption: null,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        // filters
        setSortProducts: (state, action: PayloadAction<string>) => {
            state.sortOption = action.payload;
            applyAllFilters(state);
        },
        setFilterByBrand: (state, action: PayloadAction<string>) => {
            state.selectedBrand = action.payload;
            applyAllFilters(state);
        },
        setFilterByModel: (state, action: PayloadAction<string>) => {
            state.selectedModel = action.payload;
            applyAllFilters(state);
        },
        filterProductsForSearch: (state, action: PayloadAction<string>) => {
            // products.name'e göre filtreleme yapılacak
            // eğer filteredProducts içi doluysa ilk başta oradan filtreleme yapılacak
            // eğer filteredProducts içi boşsa products içinden filtreleme yapılacak
            const search = action.payload;
            let filteredProducts =
                state?.filteredProducts?.length > 0
                    ? state?.filteredProducts
                    : state?.products;
            filteredProducts = filteredProducts?.filter((product) =>
                product?.name?.toLowerCase()?.includes(search?.toLowerCase())
            );
            state.filteredProducts = filteredProducts;
        },
        resetFilters: (state) => {
            state.selectedBrand = null;
            state.selectedModel = null;
            state.sortOption = null;
            state.filteredProducts = state?.products;
        },
        // carts
        addToCart: (state, action: PayloadAction<Product>) => {
            const product = action.payload;
            const existingCartItemIndex = state?.carts?.findIndex(
                (item) => item.product?.id === product?.id
            );

            if (existingCartItemIndex >= 0) {
                state.carts = state?.carts?.map((item, index) =>
                    index === existingCartItemIndex
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
                state.totalCartPrice += parseFloat(product?.price);
            } else {
                state.carts = state?.carts?.concat({ product, quantity: 1 });
                state.totalCartPrice += parseFloat(product?.price);
            }
        },
        reduceAndRemoveFromCart: (state, action: PayloadAction<Product>) => {
            const product = action.payload;
            const cartItem = state?.carts?.find(
                (item) => item?.product?.id === product?.id
            );
            if (cartItem?.quantity === 1) {
                state.carts = state?.carts?.filter(
                    (item) => item?.product?.id !== product?.id
                );
                state.totalCartPrice -= parseFloat(product?.price);
            } else {
                cartItem!.quantity -= 1;
                state.totalCartPrice -= parseFloat(product?.price);
            }
        },
        removeProductFromCart: (state, action: PayloadAction<Product>) => {
            // bir product carttan tamamen silinecek
            const product = action.payload;
            const cartItem = state?.carts?.find(
                (item) => item?.product?.id === product?.id
            );
            state.carts = state?.carts?.filter(
                (item) => item?.product?.id !== product?.id
            );

            state.totalCartPrice -= parseFloat(product?.price) * cartItem!.quantity!;
        },
        // checkout
        checkout: (state) => {
            if (state.carts.length > 0) {
                state.carts = [];
                state.totalCartPrice = 0;

                toast?.success("Successfully purchased!", {
                    position: "bottom-right",
                    autoClose: 3000,
                });
            }
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            productsAPI.endpoints.getProducts.matchFulfilled,
            (state, { payload }) => {
                state.products = payload || [];
                state.brands = [...new Set(payload?.map((product) => product?.brand))];
                state.models = [...new Set(payload?.map((product) => product?.model))];
                applyAllFilters(state);
            }
        );
    },
});

export const {
    setSortProducts,
    setFilterByBrand,
    setFilterByModel,
    resetFilters,
    filterProductsForSearch,
    addToCart,
    reduceAndRemoveFromCart,
    removeProductFromCart,
    checkout
} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
