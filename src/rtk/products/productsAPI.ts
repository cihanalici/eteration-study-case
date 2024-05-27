import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../../types";

const baseQuery = fetchBaseQuery({
    // baseurl sadece dev ortamında açık olacak prod branchında bu .env dosyasında belirtilen url olacak
    baseUrl: import.meta.env.VITE_API_URL as string || "https://5fc9346b2af77700165ae514.mockapi.io",
});

export const productsAPI = createApi({
    reducerPath: "productsAPI",
    baseQuery: baseQuery,
    tagTypes: ["User"],
    endpoints: (build) => ({
        //GetAllproducts
        getProducts: build.query<Product[], void>({
            query: () => {
                return {
                    url: "/products",
                };
            },
            providesTags: ["User"],
        }),
    }),
});

export const {
    useGetProductsQuery,
} = productsAPI;
