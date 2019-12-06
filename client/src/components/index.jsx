import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import AppLayout from "./appLayout/AppLayout";
import LoginForm from "./loginForm";
import Profile from "./profile";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import theme from "../constants/materialUiTheme";
import Loading from "./loading/Loading";
import MainTable from "./mainTable";
import { createBrowserHistory } from "history";
import { connect } from 'react-redux';
import "./index.css";


function App({ profileInfo }) {

    const customHistory = createBrowserHistory();

    customHistory.replace({
        state: true
    });

    return (
        <ThemeProvider theme={ theme }>
            <Router history={ customHistory }>
                {/*{ profileInfo && <Redirect  to="/login" /> }*/}
                <div>
                    <Switch>
                        <Route path="/login">
                            <LoginForm />
                            <Loading />
                        </Route>
                        <Route path="/profile">
                            <AppLayout>
                                <Profile />
                            </AppLayout>
                        </Route>
                        <Route path="/">
                            <AppLayout>
                                <MainTable />
                            </AppLayout>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </ThemeProvider>
    );
}

const mapStateToProps = (state) => ({
    profileInfo: state.profileInfo
});

export default connect(mapStateToProps)(App);




