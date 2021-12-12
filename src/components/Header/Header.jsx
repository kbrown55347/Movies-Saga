import React from "react";
import { AppBar, Toolbar, CssBaseline, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    // to customize color
    root: {
        backgroundColor: "#d4915e",
        border: "solid #CB793A 2px",
    },
    navlinks: {
        marginLeft: theme.spacing(5),
        display: "flex",
    },
    title: {
        cursor: "pointer",
        display: "flex",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(5),
        "&:hover": {
            color: "#f9dc5c",
            borderBottom: "1px solid #f9dc5c",
        },
    },
}));


// MUI navbar
function Navbar() {
    const classes = useStyles();

    return (
        <AppBar position="sticky" className={classes.root}>
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" className={classes.title}>
                    The Movies Saga
                </Typography>
                <div className={classes.navlinks}>
                    <Link to="/" className={classes.link}>
                        Home
                    </Link>
                    <Link to="/add-movie" className={classes.link}>
                        Add Movie
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;
