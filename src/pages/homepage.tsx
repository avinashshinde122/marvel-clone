import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Comics from "../components/comics";
import Header from "../components/header";
import FilterPanel from "../components/filterPanel";
import { ICharacters } from "../types";

const Homepage = () => {
  const [searchText, setSearchText] = useState("");
  const [charactersFilter, setCharactersFilter] = useState<ICharacters[]>([]);
  useEffect(() => {
    if (charactersFilter.length > 0) setSearchText("");
  }, [charactersFilter]);

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
