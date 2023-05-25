import { Data, IResComics } from "@/interfaces/api-characters";
import { IDataMovies } from "@/interfaces/api-movies";
import md5 from "md5";
const limitCharacters = 5;

export const getCharactersServer = async (): Promise<Data> => {
  const abortController = new AbortController();

  const api = "http://gateway.marvel.com/v1/public/characters?ts=";
  const timestamp = new Date().toISOString();
  const hash = md5(
    timestamp +
      process.env.MARVEL_PRIVATE_API_KEY +
      process.env.NEXT_PUBLIC_MARVEL_PUBLIC_API_KEY
  );
  const apiUrl =
    api +
    timestamp +
    "&limit=" +
    limitCharacters +
    "&apikey=" +
    process.env.NEXT_PUBLIC_MARVEL_PUBLIC_API_KEY +
    "&hash=" +
    hash;

  const res = await fetch(apiUrl, { signal: abortController.signal });
  const { data }: IResComics = await res.json();
  return data;
};
export const getCharacters = async (offset?: number): Promise<Data> => {
  const abortController = new AbortController();

  const apiUrl = `https://gateway.marvel.com/v1/public/characters?limit=${limitCharacters}&offset=${
    offset || 0
  }&apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_API_KEY}`;

  const res = await fetch(apiUrl, { signal: abortController.signal });
  const { data }: IResComics = await res.json();
  return data;
};

export const getMovies = async (): Promise<IDataMovies> => {
  const abortController = new AbortController();

  const api = `https://api.themoviedb.org/3/discover/movie?&with_companies=420&sort_by=release_date.desc&language=es-MX&api_key=${process.env.TMDMOVIE_API_KEY}`;

  const res = await fetch(api, { signal: abortController.signal });
  const data = await res.json();
  return data;
};

