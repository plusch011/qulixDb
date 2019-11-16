import React from "react";
import axios from "axios";
import { Redirect } from "react-router"

class HttpController {

    routeToLogin = () => {
        window.location.href = "/login"
    }

    getUsers = async () => {
        return await axios.get('/users')
            .then( item => {
                    <Redirect to="login" />
                return item;

            }
                )
            .catch(err => <Redirect to="login" />);
    }

    createUser = async ( userData ) => {
        axios({
            method: 'post',
            url: '/users',
            data: userData
        });
    }

    deleteUser = async (userId) => {
        axios({
            method: 'post',
            url: '/delete',
            data: userId
        });
    }
}

const httpController = new HttpController();

export default httpController;