import { API_KEY, BASE_URL, COMICS, HASH, TS } from "./constants";

export const getComics = async (page: number, searchText: string) => {
  let url = `${
    BASE_URL + COMICS
  }?ts=${TS}&apikey=${API_KEY}&hash=${HASH}&offset=${page * 20}`;
  if (searchText) {
    url += `&titleStartsWith=${searchText}`;
  }
  const result = await fetch(url);
  return await result.json();
};
