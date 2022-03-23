import {
    Button, Container,
    Grid, Typography
} from "@material-ui/core";
import React from "react";



const MainContent = ({classes}) => {
  return (
    <div className={classes.mainContent}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Oblivion Jack Harper
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et vel
          praesentium assumenda aliquid reprehenderit hic at corrupti voluptates
          corporis necessitatibus voluptatum impedit quaerat aperiam aliquam
          deserunt culpa, sint officiis vero nostrum autem doloribus reiciendis.
        </Typography>
        <div className={classes.mainButton}>
          <Grid container spacing={5} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Start Now
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Learn More
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};
export default MainContent;
