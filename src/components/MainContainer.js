import React from "react";
import {Container, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(5),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "5px",
        background: "#f1f1f7",
    }
}));

const MainContainer = ({children, ...props}) => {
    const styles = useStyles();
    return <Container className={styles.root} maxWidth='xs' {...props}> {children}</Container>
};

export default MainContainer;