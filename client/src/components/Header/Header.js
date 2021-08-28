import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "Oswald",
    },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "80%",
    margins: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#fff",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "4rem"
  },
  goDown: {
    color: "#fff",
    fontSize: "4rem",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (

    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
              Run<span className={classes.colorText}>It.</span>
            </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>

        <div> className={classes.container}
            <h1 className={classes.title}>
                Welcome to <br /> Run <span className={classes.colorText}>It.</span>
            </h1>
            <h2>
                A curated selection of running shoes <br /> specifically picked for you
            </h2>
            <IconButton>
                <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
        </div>

    </div>
  );
};