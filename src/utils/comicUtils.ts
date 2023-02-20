import { CDN_PATH } from "../api/constants";
import { IThumbnail } from "../types";

export const getThumbnailUrl = (thumbnail: IThumbnail): string => {
  const url = new URL(thumbnail.path);
  return CDN_PATH + url.pathname + "." + thumbnail.extension;
};
