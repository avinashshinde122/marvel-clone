export interface IThumbnail {
  extension: string;
  path: string;
}
export interface IComics {
  id: number;
  title: string;
  thumbnail: IThumbnail;
}
