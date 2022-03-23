import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Cards from "./cards";
import Footer from "./footer";
import MainContent from "./main-content";
import MainWindow from "./main-window";
import NavBar from "./navigation-bar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  mainFeturePost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),

    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "auto",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    backgroundColor: "black",
    opacity: "0.6",
  },
  mainFeturePostContent: {
    position: "relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(8),
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardGrid: {
    marginTop: theme.spacing(4),
  },
}));

const cards = [1, 2, 3, 4, 5, 6];

const Layout = () => {
  const classes = useStyles();
  const [value, setValues] = useState();

  const handleChange = (event, newValue) => {
    setValues(newValue);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NavBar
        classes={classes}
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
      />
      <main>
        <MainWindow classes={classes} />

        <MainContent classes={classes} />

        <Cards classes={classes} cards={cards} />
      </main>

      <Footer value={value} handleChange={handleChange} classes={classes} />
    </>
  );
};

export default Layout;
