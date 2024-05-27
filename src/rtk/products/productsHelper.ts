import { Cart, InitialState } from "../../types";

export const applyAllFilters = (state: InitialState) => {
    let filteredProducts = state.products;

    // Apply brand filter
    if (state.selectedBrand) {
        filteredProducts = filteredProducts.filter(
            (product) => product.brand === state.selectedBrand
        );
    }

    // Apply model filter
    if (state.selectedModel) {
        filteredProducts = filteredProducts.filter(
            (product) => product.model === state.selectedModel
        );
    }

    // Apply sort
    if (state.sortOption) {
        if (state.sortOption === "oldToNew") {
            filteredProducts = filteredProducts?.slice()?.sort((a, b) => new Date(a?.createdAt)?.getTime() - new Date(b?.createdAt).getTime());
        } else if (state.sortOption === "newToOld") {
            filteredProducts = filteredProducts?.slice()?.sort((a, b) => new Date(b?.createdAt)?.getTime() - new Date(a?.createdAt).getTime());
        } else if (state.sortOption === "priceHighToLow") {
            filteredProducts = filteredProducts?.slice()?.sort((a, b) => parseFloat(b?.price) - parseFloat(a?.price));
        } else if (state.sortOption === "priceLowToHigh") {
            filteredProducts = filteredProducts?.slice()?.sort((a, b) => parseFloat(a?.price) - parseFloat(b?.price));
        }
    }

    state.filteredProducts = filteredProducts;
};

export const truncateProductName = (name: string, maxLength: number) => {
    return name?.length > 15 ? name?.slice(0, maxLength) + "..." : name;
};

export const isProductInCart = (id: string, cart: Cart[]) => {
    return cart?.some((item) => item?.product?.id === id);
};