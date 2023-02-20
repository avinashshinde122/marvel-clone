import { useState } from "react";
import Grid from "@mui/material/Grid";
import Comics from "../components/comics";
import Header from "../components/header";

const Homepage = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <Grid container direction="column">
      <Header onSetSearchText={setSearchText} />
      <Comics searchText={searchText} />
    </Grid>
  );
};

export default Homepage;
