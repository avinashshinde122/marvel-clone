import { API_KEY, BASE_URL, COMICS, HASH, TS } from "./constants";

export const getComics = async () => {
  const result = await fetch(
    `${BASE_URL + COMICS}?ts=${TS}&apikey=${API_KEY}&hash=${HASH}`
  );
  return await result.json();
};
