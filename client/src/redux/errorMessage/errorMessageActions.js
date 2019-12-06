import { SET_ERROR_DATA, DELETE_ERROR_DATA  } from '../../constants/atcionsNames';

export const setLoadingTrue = () => ({
    type: SET_ERROR_DATA
});
export const setLoadingFalse = { type: DELETE_ERROR_DATA };