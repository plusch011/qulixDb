import React, {useEffect, useState} from 'react';
import UserModal from "../modals/UserModal";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import { connect } from 'react-redux'


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%'
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

function MainTable({ usersData, getUsersData}) {
    const classes = useStyles();
    const history = useHistory();
    const [currentUser, setCurrentUser] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleModalClose = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        getUsersData();
    }, [history]);


    return (
        <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {usersData[0] && Object.keys(usersData[0]).map(name =>
                                <TableCell className={classes.head} key={ name } align="center">{name}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {usersData && usersData.map(user =>
                            <TableRow>
                                {usersData[0] && Object.keys(usersData[0]).map(name =>
                                    <TableCell key={ name } align="center">{user[name]}</TableCell>)}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>

            </div>

            {isModalOpen &&
            <UserModal
                currentUser={currentUser}
                handleModalClick={handleModalClose}
            />
            }
        </Paper>
    );
};

const mapStateToProps = (store) => ({
    usersData: store.usersData
});

const mapDispatchToProps = (dispatch) => ({
    getUsersData: () =>  dispatch({ type: "GET_USERS_DATA" })
});


export default connect(mapStateToProps, mapDispatchToProps)(MainTable);


