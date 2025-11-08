import type { Anime } from './AnimeItems';
import type { PaginationPlus } from './PaginationPlus';

export type SearchResponse = PaginationPlus & {
  data?: Anime[];
};

export type TopAnimeResponse = SearchResponse;
