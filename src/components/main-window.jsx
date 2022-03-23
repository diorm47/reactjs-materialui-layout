import React from "react";
import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import mainImg from "../assets/images/mainImg.jpg";

const MainWindow = ({ classes }) => {
  return (
    <Paper
      className={classes.mainFeturePost}
      style={{ backgroundImage: `url(${mainImg})` }}
    >
      <Container fixed>
        <div className={classes.overlay} />
        <Grid сontainer>
          <Grid item md={6}>
            <div className={classes.mainFeturePostContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                OBLIVION UNIVERSE
              </Typography>

              <Typography component="h5" color="inherit" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                nam totam consequuntur magni minus sunt culpa odit, expedita
                dolore, nihil repudiandae sed, impedit laborum hic!
              </Typography>
              <Button variant="contained" color="secondary">
                Learn More
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default MainWindow;
