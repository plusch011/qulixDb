import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import AppLayout from "./appLayout/AppLayout";
import LoginForm from "./loginForm";
import Profile from "./profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "../constants/materialUiTheme";
import Loading from "./loading/Loading";
import UsersTable from "./usersTable";
import { createBrowserHistory } from "history";
import "./index.css";


const customHistory = createBrowserHistory();

customHistory.replace({
    pathname: '/',
    state: true
});

console.log(customHistory);

export default function App() {
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
                                <UsersTable />
                            </AppLayout>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </ThemeProvider>
    );
}


