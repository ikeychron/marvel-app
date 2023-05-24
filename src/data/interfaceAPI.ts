import { Data, IResMarvel } from "@/interfaces/api";
import md5 from "md5";

export const getCharacters = async (): Promise<Data> => {
  const abortController = new AbortController();

  const api = "http://gateway.marvel.com/v1/public/characters?limit=5&ts=";
  const timestamp = new Date().toISOString();
  const hash = md5(
    timestamp +
      process.env.MARVEL_PRIVATE_API_KEY +
      process.env.NEXT_PUBLIC_MARVEL_PUBLIC_API_KEY
  );
  const apiUrl =
    api +
    timestamp +
    "&apikey=" +
    process.env.NEXT_PUBLIC_MARVEL_PUBLIC_API_KEY +
    "&hash=" +
    hash;

  const res = await fetch(apiUrl, { signal: abortController.signal });
  const { data }: IResMarvel = await res.json();

  return data;
};

