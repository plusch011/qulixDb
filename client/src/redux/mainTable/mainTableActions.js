import { GET_USERS_INFO_SUCCESS, GET_USERS_INFO } from '../../constants/atcionsNames';


export const getUsersInfo = {
    type: GET_USERS_INFO
};

export const getUsersInfoSuccess = (data) => ({
    type: GET_USERS_INFO_SUCCESS,
    payload: data
});