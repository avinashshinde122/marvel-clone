export interface IThumbnail {
  extension: string;
  path: string;
}
export interface IComics {
  id: number;
  title: string;
  thumbnail: IThumbnail;
}
export interface ICharacters {
  id: number;
  name: string;
  thumbnail: IThumbnail;
}
