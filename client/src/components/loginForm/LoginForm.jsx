import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CssBaseline, TextField, Typography, Container, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
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

function LoginForm({  submitLoginForm }) {
    const classes = useStyles();
    const history = useHistory();


    const submitLogin = (e) => {
        e.preventDefault();


        submitLoginForm({
            username: e.nativeEvent.target[0].value,
            password: e.nativeEvent.target[2].value
        });


        // httpController.submitLogin( {
        //     username: e.nativeEvent.target[0].value,
        //     password: e.nativeEvent.target[2].value
        // }).then(() => {
        //     history.replace({
        //         pathname: '/users',
        //         state: true
        //     });
        // });
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
}


const mapDispatchToProps = (dispatch) => ({
   submitLoginForm: (data) =>  dispatch({
       type: "USER_LOGIN",
       payload: data
   })
});



export default connect(null, mapDispatchToProps)(LoginForm);