import React from 'react';
import HeaderLayout from "./header/HeaderLayout";
import MainLayout from "./main/MainLayout";
import LoginForm from "../components/loginForm";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import "./index.css";

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/login">
                        <LoginForm />
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
