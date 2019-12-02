import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, MenuItem, Menu, Fab} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Reply from '@material-ui/icons/Reply';
import purple from '@material-ui/core/colors/purple';
import httpController from "../../services/httpController";
import {Link, useHistory} from "react-router-dom";


const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    adminButton: {
        background: purple,
    },
    goBackButton: {
        margin: theme.spacing(1),
        position: "absolute",
        right: "7.8%",
        bottom: "27px",
        backgroundColor: theme.secondary
    },
    appBar: {
        position: "fixed",
        height: "8vh",
        bottom: 0,
        background: 'radial-gradient(circle at 90% top, transparent, transparent 35px, #683AB7 35px)'
    }
}));

export default function ToolBar() {
    const classes = useStyles();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        handleMenuClose();

        httpController.submitLogout()
            .catch(() => history.push('/login'));
    };

    const isGoBack = () => history.location.state;

    const menuId = "primary-search-account-menu";

    return (
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle/>
                    </IconButton>
                    <Fab size="large"
                         color="secondary"
                         aria-label="add"
                         className={classes.goBackButton}
                         onClick={history.goBack}
                         disabled={isGoBack()}
                    >
                        <Reply/>
                    </Fab>
                </Toolbar>

                <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                    id={menuId}
                    keepMounted
                    transformOrigin={{vertical: 'top', horizontal: 'right'}}
                    open={isMenuOpen}
                    onClose={handleMenuClose}
                >
                    <MenuItem>
                        <Link to="/profile" onClick={handleMenuClose}>
                            Profile
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </AppBar>

    );
}