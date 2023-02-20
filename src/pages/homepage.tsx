import { useState } from "react";
import Grid from "@mui/material/Grid";
import Comics from "../components/comics";
import Header from "../components/header";
import FilterPanel from "../components/filterPanel";

const Homepage = () => {
  const [searchText, setSearchText] = useState("");
  const [charactersFilter, setCharactersFilter] = useState<number[]>([]);
  return (
    <Grid container direction="column">
      <Header onSetSearchText={setSearchText} />
      <FilterPanel
        onSetCharactersFilter={setCharactersFilter}
        selectedCharacters={charactersFilter}
      />
      <Comics searchText={searchText} selectedCharacters={charactersFilter} />
    </Grid>
  );
};

export default Homepage;
