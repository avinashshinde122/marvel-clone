import Grid from "@mui/material/Grid";
import Logo from "./logo";

const Header = () => {
  return (
    <Grid
      container
      sx={{ background: "#EC1D25", justifyContent: "space-between" }}
    >
      <Grid item>
        <Logo />
      </Grid>
      <Grid item>
        <section>Search box</section>
      </Grid>
    </Grid>
  );
};

export default Header;
