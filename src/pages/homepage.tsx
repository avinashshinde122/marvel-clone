import Grid from "@mui/material/Grid";
import Comics from "../components/comics";
import Header from "../components/header";

const Homepage = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <Comics />
      </Grid>
    </Grid>
  );
};

export default Homepage;
