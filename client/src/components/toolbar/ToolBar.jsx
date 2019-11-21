import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, MenuItem, Menu, Fab} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Reply from '@material-ui/icons/Reply';
import purple from '@material-ui/core/colors/purple';
import httpController from "../../services/httpController";
import loadingWrapper from "../../services/loadingWrapper";
import { Link, useHistory } from "react-router-dom";


const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    adminButton: {
        background: purple,
    },
    margin: {
        margin: theme.spacing(0, 1),
        position: "relative",
        bottom: "30px",
        backgroundColor: "black"
    },
    appBar: {
        position: "fixed",
        height: "8vh",
        bottom: 0,
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

        loadingWrapper(httpController.submitLogout)
            .then(() => history.push('/login'));
    };

    const goBack = () => {
        debugger
        if (!history.location.state) {
            history.goBack();
        }
    };

    const isGoBack = () => !history.location.state;

    const menuId = 'primary-search-account-menu';

    return (
        <div className={ classes.grow }>
            <AppBar className={ classes.appBar } position="static">
                <Toolbar>
                    <div className={classes.grow} />
                    <IconButton
                        edge="start"
                        className={ classes.menuButton }
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <div className={classes.grow} />
                    <Fab size="medium"
                         color="primary"
                         aria-label="add"
                         className={ classes.margin }
                         onClick={ goBack }
                    >
                         <Reply />
                    </Fab>
                </Toolbar>
            </AppBar>


            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                <MenuItem>
                    <Link to="/profile" onClick={ handleMenuClose }>
                        Profile
                    </Link>
                </MenuItem>
                <MenuItem onClick={ handleLogout }>Logout</MenuItem>
            </Menu>
        </div>
    );
}