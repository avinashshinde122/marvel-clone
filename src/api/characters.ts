import { API_KEY, BASE_URL, CHARACTERS, HASH, TS } from "./constants";

export const getCharacters = async (page: number) => {
  const url = `${
    BASE_URL + CHARACTERS
  }?ts=${TS}&apikey=${API_KEY}&hash=${HASH}&limit=${8}&offset=${page * 8}`;

  const result = await fetch(url);
  return await result.json();
};
