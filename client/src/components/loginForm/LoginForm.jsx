import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CssBaseline, TextField, Typography, Container, Grid } from '@material-ui/core';
import httpController from "../../services/httpController";
import loadingWrapper from "../../services/loadingWrapper";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function LoginForm() {
    const classes = useStyles();
    const history = useHistory();


    const submitLogin = async (e) => {
        e.preventDefault();

        await loadingWrapper(httpController.submitLogin, {
            username: e.nativeEvent.target[0].value,
            password: e.nativeEvent.target[2].value
        }).then(() => {
            history.replace({
                pathname: '/',
                state: true
            });
        });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sing in
                </Typography>
                <form className={classes.form} noValidate onSubmit={ submitLogin }>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="username"
                                name="username"
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign in
                    </Button>
                </form>
            </div>
        </Container>
    );
};