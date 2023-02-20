import { styled } from "@mui/material/styles";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { IComics } from "../types";
import { getThumbnailUrl } from "../utils/comicUtils";

export const StyledCard = styled(Card)(({ theme }) => ({
  width: 180,
  height: 250,
  margin: theme.spacing(1),
}));

type ComicCardType = {
  comic: IComics;
};
const ComicCard = ({ comic }: ComicCardType) => {
  const thumbnailUrl = getThumbnailUrl(comic.thumbnail);
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="194"
        image={thumbnailUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {comic.title}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default ComicCard;
