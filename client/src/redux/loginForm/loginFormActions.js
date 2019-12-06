import { GET_PROFILE_INFO_SUCCESS } from '../../constants/atcionsNames';


export const getProfileInfoSuccess = (data) => ({
    type: GET_PROFILE_INFO_SUCCESS,
    payload: data
});
