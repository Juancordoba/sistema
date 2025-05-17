// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { ClienteT } from '@/varios/types'

// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// export const clientesApi = createApi({
//     reducerPath: 'clientesAPI',
//     baseQuery: fetchBaseQuery({
//       baseUrl
//     }),
//     endpoints: (builder) => ({
//         findManyClientes: builder.query<ClienteT[], null>({
//             query: () => 'clientes/findmany'
//         }),
//         countClientes: builder.query<ClienteT[], null>({
//             query: () => 'clientes/count'
//         }),
//        // autocompleteClientes: builder.query<ClienteT[], null>({
//        //     query: () => 'clientes/autocomplete'
//        // }),
//     })
// })

// export const { useLazyCountClientesQuery, useLazyFindManyClientesQuery } = clientesApi
