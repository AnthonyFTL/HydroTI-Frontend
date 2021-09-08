import { useState } from "react";
import PropTypes from "prop-types";

import { Divider, makeStyles, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import MuiDrawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";

import List from "./List";
import Profile from "./Profile";
import { Link } from "react-router-dom";

import routes from "../../../router/routes";

const width = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: width,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${width}px)`,
      marginLeft: width,
    },
  },
  toolbarTheme: theme.mixins.toolbar,
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
    },
  },
  paper: {
    width: width,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  main: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawerHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...theme.mixins.toolbar,
  },
  drawerBody: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
  },
}));

const Drawer = ({ options, children }) => {
  const styles = useStyles();
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const DrawerBody = (
    <div className={styles.drawerBody}>
      <div>
        <div className={styles.drawerHeader}>
          <Typography variant="h6">HydroTI</Typography>
        </div>
        <Divider />
        <List options={options} />
      </div>
      <Typography variant="h6" align="center" style={{ marginBottom: 10 }}>
        <Link to={routes.SIGN_IN} className={styles.link}>
          Cerrar Sesión
        </Link>
      </Typography>
    </div>
  );

  return (
    <div className={styles.root}>
      <CssBaseline />
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setDrawerIsOpen(true)}
            className={styles.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Profile />
        </Toolbar>
      </AppBar>
      <nav aria-label="navigation items" className={styles.drawer}>
        <Hidden mdUp implementation="css">
          <MuiDrawer
            variant="temporary"
            anchor="left"
            open={drawerIsOpen}
            onClose={() => setDrawerIsOpen(false)}
            classes={{
              paper: styles.paper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {DrawerBody}
          </MuiDrawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <MuiDrawer
            classes={{
              paper: styles.paper,
            }}
            variant="permanent"
            open
          >
            {DrawerBody}
          </MuiDrawer>
        </Hidden>
      </nav>
      <main className={styles.main}>
        <div className={styles.toolbarTheme} />
        {children}
      </main>
    </div>
  );
};

Drawer.propTypes = {
  options: PropTypes.array.isRequired,
  children: PropTypes.node,
};

Drawer.defaultProps = {
  children: null,
};

export default Drawer;
