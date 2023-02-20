import { useState } from "react";
import { useQuery } from "react-query";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { getCharacters } from "../api/characters";
import Avatar from "@mui/material/Avatar";
import { getThumbnailUrl } from "../utils/comicUtils";
import IconButton from "@mui/material/IconButton";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

export const ContainerGrid = styled(Grid)(({ theme }) => ({
  height: 150,
  background: theme.palette.primary.dark,
}));

export const NextPrevButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  borderRadius: "3px",
}));

const FilterPanel = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, data } = useQuery(["characters", currentPage], () =>
    getCharacters(currentPage)
  );
  const totalPages = Math.floor(data?.data?.total / 8) || 0;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <ContainerGrid container>
      <Grid
        container
        m={"auto"}
        md={10}
        justifyContent="center"
        alignItems="center"
      >
        <NextPrevButton
          aria-label="previous"
          size="large"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          <NavigateBefore fontSize="large" />
        </NextPrevButton>
        {data?.data?.results.map((character: any) => {
          const thumbnailUrl = getThumbnailUrl(character.thumbnail);
          return (
            <Avatar
              alt={character.name}
              src={thumbnailUrl}
              sx={{ width: 80, height: 80, margin: "0px 10px" }}
            />
          );
        })}
        <NextPrevButton
          aria-label="next"
          size="large"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          <NavigateNext fontSize="large" />
        </NextPrevButton>
      </Grid>
    </ContainerGrid>
  );
};

export default FilterPanel;
