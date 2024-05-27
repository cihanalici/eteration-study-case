import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import storage from "redux-persist/lib/storage";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from "redux-persist";

import { productsReducer } from "./products/productsSlice";
import { productsAPI } from "./products/productsAPI";

const persistConfig = {
    key: "eteration",
    storage,
}

const rootReducer = combineReducers({
    products: productsReducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(productsAPI.middleware, createLogger()),
});

export const persistor = persistStore(store);

// RootState tipini tanımlayın
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;