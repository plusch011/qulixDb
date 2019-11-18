import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fab }from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    }
}));

export default function AdminButton({ size, icon }) {
    const classes = useStyles();

    return (
        <div>
            <Fab color="primary" aria-label="add" className={ classes.fab } size={ size }>
                { icon }
            </Fab>
        </div>
    );
}
