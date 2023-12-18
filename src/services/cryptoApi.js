import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoapiHeaders = {
  "X-RapidAPI-Key": "0561863ecdmsha19dc02207be928p1f1a09jsn4563bc2d6a3e",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const BASE_URL = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoapiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
