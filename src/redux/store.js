import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./services/dummyData";

export const store = configureStore({
    reducer:{
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (middle) => middle().concat(productsApi.middleware)
})
    
setupListeners(store.dispatch)
