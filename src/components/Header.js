import React from "react";
import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "Ubuntu",
        margin: theme.spacing(5, 0, 2),
        textAlign: "center",
        fontSize: "40px",
    },
}));

const Header = () => {
    const styles = useStyles();
    return <Typography className={styles.root} component="h1">Jones Form</Typography>
};

export default Header;