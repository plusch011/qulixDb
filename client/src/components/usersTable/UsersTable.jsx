import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';
import httpController from "../../services/httpController";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    paper: {
        marginTop: theme.spacing(3),
        width: '100%',
        overflowX: 'auto',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 650,
    },
}));


export default function UsersTable() {
    const [ users, setUsers ] = useState([]);
    const classes = useStyles();

    useEffect( async () => {
        const data = await httpController.getUsers();
        console.log(data);
        setUsers(data);
    }, []);

    return (

        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Table className={classes.table} size="small">
                    <TableBody>
                        {users.map(user => (
                            <TableRow key={user.name}>
                                <TableCell align="left">{user.username}</TableCell>
                                <TableCell align="left">{user._id}</TableCell>
                                <TableCell align="left">{user.created}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}

