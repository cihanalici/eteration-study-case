export interface Product {
    createdAt: string;
    name: string;
    image: string;
    price: string;
    description: string;
    model: string;
    brand: string;
    id: string;
}

export interface Cart {
    product: Product;
    quantity: number;
}

export interface InitialState {
    products: Product[];
    filteredProducts: Product[];
    brands: string[];
    models: string[];
    loading: boolean;
    error: null;
    carts: Cart[];
    totalCartPrice: number;
    selectedBrand: string | null;
    selectedModel: string | null;
    sortOption: string | null;
}