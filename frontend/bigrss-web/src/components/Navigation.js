import React, { useState }  from 'react'
import './Navigation.css';
import { Link} from "react-router-dom";
import { Grid, Drawer, List, ListItem, IconButton, ListItemIcon, ListItemText } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import BarChartIcon from '@material-ui/icons/BarChart';
import AddIcon from '@material-ui/icons/Add';

function Navigation() {
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = (state) => (e) => {
        setOpenDrawer(state);
    };

    return (
        <div className="nav-header">
            <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                <Grid item>
                    <IconButton aria-label="open menu" onClick={toggleDrawer(true)}><MenuIcon /></IconButton >
                    <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
                        <List>
                        <ListItem button component={Link} to="/">
                                <ListItemIcon><HomeIcon /></ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItem>
                            <ListItem button component={Link} to="/about">
                                <ListItemIcon><InfoIcon /></ListItemIcon>
                                <ListItemText primary="About" />
                            </ListItem>
                            <ListItem button component={Link} to="/stats">
                                <ListItemIcon><BarChartIcon /></ListItemIcon>
                                <ListItemText primary="Stats" />
                            </ListItem>
                            <ListItem button component={Link} to="/add">
                                <ListItemIcon><AddIcon /></ListItemIcon>
                                <ListItemText primary="Add feed" />
                            </ListItem>
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
