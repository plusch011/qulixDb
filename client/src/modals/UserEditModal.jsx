import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, 50%)`,
    }
}));


export default function UserEditModal({ isOpen, closeModal, user }) {
    const classes = useStyles();

    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={ isOpen }
            onClose={ closeModal }
        >
            <div className={classes.paper}>
                <h2 id="simple-modal-title">Edit user</h2>
            </div>
        </Modal>
    )
}