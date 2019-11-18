import React from 'react';
import HeaderLayout from "./header/HeaderLayout";
import MainLayout from "./main/MainLayout";
import LoginForm from "../components/loginForm";
import Dashboard from "./profile/Dashboard";
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
                        <Dashboard />
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
