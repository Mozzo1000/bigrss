import React, { useState }  from 'react'
import './Navigation.css';
import { Link} from "react-router-dom";
import { Grid, Drawer, List, ListItem, IconButton, ListItemIcon, ListItemText } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Brightness4Icon from '@material-ui/icons/Brightness4';

function Navigation() {
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = (state) => (e) => {
        setOpenDrawer(state);
    };

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
                <Grid item>
                    <IconButton aria-label="open menu" onClick={toggleDrawer(true)}><MoreVertIcon /></IconButton >
                    <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
                        <List>
                            <ListItem button>
                                <ListItemIcon><Brightness4Icon /></ListItemIcon>
                                <ListItemText primary="Dark/light mode" />
                            </ListItem>
                        </List>
                    </Drawer>
                </Grid>
            </Grid>
        </div>
    )
}

export default Navigation
