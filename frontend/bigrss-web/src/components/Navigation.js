import React from 'react'
import './Navigation.css';
import { Link} from "react-router-dom";
import { Grid } from "@material-ui/core";

function Navigation() {
    return (
        <div className="nav-header">
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                <Grid item>
                    <Link to="/">Home</Link>
                </Grid>
                <Grid item>
                    <Link to="/about">About</Link>
                </Grid>
                <Grid item>
                    <Link to="/stats">Stats</Link>
                </Grid>
                <Grid item>
                    <Link to="/add">Add feed</Link>
                </Grid>
            </Grid>
        </div>
    )
}

export default Navigation
