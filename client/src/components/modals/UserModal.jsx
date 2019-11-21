import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Close from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        outline: "none"
    },
    button: {
        position: "absolute",
        top: 0,
        right: 0,
    },
    card: {
        minWidth: 300,
        margin: theme.spacing(1),
    }
}));


export default function UserModal({ currentUser, handleModalClick }) {
    const classes = useStyles();

    return (
        <Modal
            open={ true }
            onClose={ handleModalClick }
        >
            <div className={ classes.paper }>
                <Card className={ classes.card }>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Username: { currentUser.user[0].username }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Created: { currentUser.user[0].created }
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Edit
                        </Button>
                    </CardActions>
                    <IconButton
                        color="primary"
                        className={classes.button}
                        aria-label="upload picture"
                        component="span"
                        onClick={ handleModalClick }
                    >
                        <Close />
                    </IconButton>
                </Card>
            </div>
        </Modal>
    )
}

