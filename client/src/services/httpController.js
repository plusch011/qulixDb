import axios from "axios";

class HttpController {

    routeToLogin = () => {
        window.location.href = "/login"
    }

    getUsers = async () => {
        return await axios.get('/users')
            .then(response => response.data)
            .catch(err => this.routeToLogin());
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