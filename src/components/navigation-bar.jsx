import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import MenuIcon from "@material-ui/icons/Menu";

const NavBar = ({classes, handleClose, handleOpen, open}) => {
  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            OBLIVION
          </Typography>
          <Box mr={3}>
            <Button color="inherit" variant="outlined" onClick={handleOpen}>
              Log In
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Log In</DialogTitle>
              <DialogContent>
                <DialogContentText>Log In to see your</DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Adress"
                  type="email"
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="pass"
                  label="Password"
                  type="password"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                  Log In
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
          <Button color="secondary" variant="contained">
            Sign Up
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
