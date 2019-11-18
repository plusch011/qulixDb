import React from 'react';
import HeaderLayout from "./header";
import MainLayout from "./main";
import LoginForm from "./loginForm";
import Profile from "./profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/login">
                        <LoginForm />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/">
                        <HeaderLayout />
                        <MainLayout />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
