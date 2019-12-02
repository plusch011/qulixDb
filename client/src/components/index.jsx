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
import "./index.css";


export default function App() {

    const customHistory = createBrowserHistory();

    customHistory.replace({
        state: true
    });

    return (
        <ThemeProvider theme={ theme }>
            <Router history={ customHistory }>
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
                        <Redirect from="/login" to="/users" />
                    </Switch>
                </div>
            </Router>
        </ThemeProvider>
    );
}


