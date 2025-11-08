import type { AnimeImages } from './AnimeImages';
import type { Broadcast } from './Broadcast';
import type { Daterange } from './Daterange';
import type { MalUrl } from './MalUrl';
import type { Title } from './Title';
import type { TrailerBase } from './TrailerBase';

export const animeTypeEnum = {
  TV: 'TV',
  OVA: 'OVA',
  Movie: 'Movie',
  Special: 'Special',
  ONA: 'ONA',
  Music: 'Music',
} as const;

export type AnimeTypeEnumKey = (typeof animeTypeEnum)[keyof typeof animeTypeEnum];

export const animeStatusEnum = {
  'Finished Airing': 'Finished Airing',
  'Currently Airing': 'Currently Airing',
  'Not yet aired': 'Not yet aired',
} as const;

export type AnimeStatusEnumKey = (typeof animeStatusEnum)[keyof typeof animeStatusEnum];

export const animeRatingEnum = {
  'G - All Ages': 'G - All Ages',
  'PG - Children': 'PG - Children',
  'PG-13 - Teens 13 or older': 'PG-13 - Teens 13 or older',
  'R - 17+ (violence & profanity)': 'R - 17+ (violence & profanity)',
  'R+ - Mild Nudity': 'R+ - Mild Nudity',
  'Rx - Hentai': 'Rx - Hentai',
} as const;

export type AnimeRatingEnumKey = (typeof animeRatingEnum)[keyof typeof animeRatingEnum];

export const animeSeasonEnum = {
  summer: 'summer',
  winter: 'winter',
  spring: 'spring',
  fall: 'fall',
} as const;

export type AnimeSeasonEnumKey = (typeof animeSeasonEnum)[keyof typeof animeSeasonEnum];

export type Anime = {
  mal_id?: number;
  url?: string;
  images?: AnimeImages;
  trailer?: TrailerBase;
  approved?: boolean;
  titles?: Title[];
  title?: string;
  title_english?: string | null;
  title_japanese?: string | null;
  title_synonyms?: string[];
  type?: AnimeTypeEnumKey | null;
  source?: string | null;
  episodes?: number | null;
  status?: AnimeStatusEnumKey | null;
  airing?: boolean;
  aired?: Daterange;
  duration?: string | null;
  rating?: AnimeRatingEnumKey | null;
  score?: number | null;
  scored_by?: number | null;
  rank?: number | null;
  popularity?: number | null;
  members?: number | null;
  favorites?: number | null;
  synopsis?: string | null;
  background?: string | null;
  season?: AnimeSeasonEnumKey | null;
  year?: number | null;
  broadcast?: Broadcast;
  producers?: MalUrl[];
  licensors?: MalUrl[];
  studios?: MalUrl[];
  genres?: MalUrl[];
  explicit_genres?: MalUrl[];
  themes?: MalUrl[];
  demographics?: MalUrl[];
};
