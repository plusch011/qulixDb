import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Refresh from '@material-ui/icons/Refresh';

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        outline: "none",
    },
    card: {
        minWidth: 300,
        margin: theme.spacing(1),
    }
}));


export default function ErrorMessage({ error }) {
    const classes = useStyles();

    return (
            <div className={ classes.paper }>
                <Card className={ classes.card }>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            { error.message }
                        </Typography>
                    </CardContent>
                    <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                    >
                        <Refresh />
                    </IconButton>
                </Card>
            </div>
    )
}




