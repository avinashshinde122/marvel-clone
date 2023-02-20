import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import { useQuery } from "react-query";
import { getComics } from "../api/comics";
import { ICharacters, IComics } from "../types";
import ComicCard from "./comicCard";

type ComicsProps = {
  searchText: string;
  selectedCharacters: ICharacters[];
};
const Comics = ({ searchText, selectedCharacters }: ComicsProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, data } = useQuery(
    ["comics", currentPage, searchText, selectedCharacters],
    () => getComics(currentPage, searchText, selectedCharacters)
  );
  const totalPages = Math.ceil(data?.data?.total / 20) || 0;
  const handlePageChange = (event: any, page: number) => {
    event.preventDefault();
    setCurrentPage(page);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Grid container justifyContent="center" alignItems="center" m={"auto"}>
      <Grid item md={10}>
        {searchText && <Typography variant="body2">Search results</Typography>}
        {selectedCharacters.length > 0 && (
          <Typography variant="subtitle1">
            Explore- {selectedCharacters.map((char) => char.name).join(", ")}
          </Typography>
        )}
      </Grid>
      <Grid item md={10} sx={{ display: "flex", flexWrap: "wrap" }}>
        {data?.data?.results.map((comic: IComics) => (
          <ComicCard comic={comic} key={comic.id} />
        ))}
      </Grid>
      <Grid
        item
        md={10}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Pagination
          count={totalPages}
          variant="outlined"
          shape="rounded"
          color="secondary"
          page={currentPage}
          onChange={handlePageChange}
          sx={{ margin: "16px 0px" }}
        />
      </Grid>
    </Grid>
  );
};

export default Comics;
