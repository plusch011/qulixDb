import axios from "axios";


class HttpController {

    submitLogin = async (data) =>
        await axios.post('/login', data)
                   .then(response => response.data);


    submitLogout = async (data) =>
        axios.post('/logout');

    getUsers = async () =>
         await axios.get('/users')
            .then(response => response.data);

    createUser = async ( userData ) =>
        axios({
            method: 'post',
            url: '/users',
            data: userData
        });

    editUser = async (newUserData) =>
        axios({
            method: 'put',
            url: '/update',
            data: newUserData
        });

    deleteUser = async (_id) =>
        axios({
            method: 'post',
            url: '/delete',
            data: { _id }
    })
}

const httpController = new HttpController();

export default httpController;