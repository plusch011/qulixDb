import React, { useEffect, useState } from 'react';
import UserModal from "../modals/UserModal";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import httpController from "../../services/httpController";
import loadingWrapper from "../../services/loadingWrapper";
import { formatDate } from "../../utils";


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    tableWrapper: {
        maxHeight: "92vh",
        overflow: 'auto',
    },
    head: {
        backgroundColor: theme.palette.primary.main,
        color: "white"
    }
}));

export default function UsersTable() {
    const classes = useStyles();
    const tableHeadNames = ["Username", "Created"];
    const [ users, setUsers ] = useState([]);
    const [ currentUser, setCurrentUser ] = useState([]);
    const [ isModalOpen, setModalOpen ] = useState(false);
    const history = useHistory();

    const handleRowClick = (username) => {
        loadingWrapper(httpController.getFullUserInfo, username)
            .then(data => { setCurrentUser(data) })
            .then(() => setModalOpen(true));
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    useEffect(  () => {
        loadingWrapper(httpController.getUsers)
            .then(data => setUsers(data))
            .catch(() => history.push('/login'))
    }, [history]);


    return (
        <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead className={ classes.tableHead }>
                        <TableRow>
                            { tableHeadNames.map(name => <TableCell className={ classes.head } key={name } align="center">{ name }</TableCell>) }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(user =>
                            <TableRow hover key={user.username} onClick={ () => handleRowClick(user.username) }>
                                <TableCell align="center">{ user.username }</TableCell>
                                <TableCell align="center">{ formatDate(user.created) }</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {isModalOpen &&
                <UserModal
                    currentUser={ currentUser }
                    handleModalClick={ handleModalClose }
                />
            }
        </Paper>
    );
}