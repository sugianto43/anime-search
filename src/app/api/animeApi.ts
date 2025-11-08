import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { SearchResponse, TopAnimeResponse } from './types/Reasponse';
import type { Anime } from './types/AnimeItems';

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v4' }),
  endpoints: (build) => ({
    searchAnime: build.query<SearchResponse, { q: string; page?: number; limit?: number }>({
      query: ({ q, page = 1, limit = 12 }) => ({
        url: '/anime',
        params: { q, page, limit },
      }),
      keepUnusedDataFor: 10,
    }),
    getAnimeById: build.query<{ data: Anime }, number>({
      query: (id) => ({ url: `/anime/${id}` }),
    }),
    getTopAnime: build.query<
      TopAnimeResponse,
      {
        type?: string;
        filter?: string;
        rating?: string;
        sfw?: boolean;
        page?: number;
        limit?: number;
      }
    >({
      query: ({ type, filter, rating, sfw, page = 1, limit = 5 }) => ({
        url: '/top/anime',
        params: { type, filter, rating, sfw, page, limit },
      }),
    }),
  }),
});

export const { useSearchAnimeQuery, useGetAnimeByIdQuery, useGetTopAnimeQuery } = animeApi;
