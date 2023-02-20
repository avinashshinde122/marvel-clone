import { Dispatch, SetStateAction } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Logo from "./logo";
type HeaderProps = {
  onSetSearchText: Dispatch<SetStateAction<string>>;
};
const Header = ({ onSetSearchText }: HeaderProps) => {
  const searchHandler = (e: any) => {
    e.preventDefault();
    const text = e.target["searchField"].value;
    onSetSearchText(text);
  };
  return (
    <Grid
      container
      sx={{ background: "#EC1D25", justifyContent: "space-between" }}
    >
      <Grid item>
        <Logo />
      </Grid>
      <Grid item sx={{ width: "500px", display: "flex", alignItems: "center" }}>
        <form onSubmit={searchHandler}>
          <TextField
            size="small"
            fullWidth
            label="search for comics... "
            name="searchField"
            color="secondary"
          />
        </form>
      </Grid>
    </Grid>
  );
};

export default Header;
