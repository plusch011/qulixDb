import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableRow, Paper } from '@material-ui/core';
import TableAdminPanel from "./tableAdminPanel/TableAdminPanel";
import httpController from "../../services/httpController";


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: "80px"
    },
    paper: {
        marginTop: theme.spacing(3),
        width: '100%',
        overflowX: 'auto',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 355,
    },
}));


export default function UsersTable() {
    const [ users, setUsers ] = useState([]);
    const classes = useStyles();

    useEffect(  () => {
        httpController.getUsers().then(data => setUsers(data));
    }, []);

    const deleteUser = (user) => {
        httpController.deleteUser(user["_id"]).then(() => setUsers(users.filter(user1 => user1 !== user)));
    };

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Table className={classes.table} size="small">
                    <TableBody>
                        {users.map(user => (
                            <TableRow key={user.username} >
                                <TableCell align="left">{user.username}</TableCell>
                                <TableCell align="left">{user.created}</TableCell>
                                <TableCell align="right">
                                    <TableAdminPanel user={ user } deleteUser={ deleteUser } />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
};

