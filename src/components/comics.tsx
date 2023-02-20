import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import { useQuery } from "react-query";
import { getComics } from "../api/comics";
import { IComics } from "../types";
import ComicCard from "./comicCard";

type ComicsProps = {
  searchText: string;
  selectedCharacters: number[];
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
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        md={10}
        m={"auto"}
      >
        {data?.data?.results.map((comic: IComics) => (
          <ComicCard comic={comic} key={comic.id} />
        ))}
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
    </>
  );
};

export default Comics;
