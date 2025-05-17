import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice';
// import pedidoReducer from './features/Pedido.Slice'
// import articuloReducer from './features/Articulo.Slice';

// import { articulosApi } from "./services/articulosApi";
// import { clientesApi } from "./services/clientesApi";
// import { salonesApi  } from "./services/salonesApi";
// import { documentosApi } from "./services/documentosApi";

import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
   //     pedidoReducer,
    //    articuloReducer,
        counter: counterReducer,
    //    [articulosApi.reducerPath]: articulosApi.reducer,
    //    [clientesApi.reducerPath]: clientesApi.reducer,
      //  [salonesApi.reducerPath]: salonesApi.reducer,
     //   [documentosApi.reducerPath]: documentosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    //    articulosApi.middleware, 
    //  clientesApi.middleware,
      //  salonesApi.middleware,
     //   documentosApi.middleware,
    ])
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch