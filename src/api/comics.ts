import { ICharacters } from "../types";
import { API_KEY, BASE_URL, COMICS, HASH, TS } from "./constants";

export const getComics = async (
  page: number,
  searchText: string,
  charactersFilter: ICharacters[]
) => {
  let url = `${
    BASE_URL + COMICS
  }?ts=${TS}&apikey=${API_KEY}&hash=${HASH}&offset=${(page - 1) * 20}`;
  if (searchText) {
    url += `&titleStartsWith=${searchText}`;
  }
  if (charactersFilter?.length > 0) {
    url += `&characters=${charactersFilter.map((char) => char.id).join(",")}`;
  }
  const result = await fetch(url);
  return await result.json();
};
