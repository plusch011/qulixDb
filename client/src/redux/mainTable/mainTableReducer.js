import { GET_USERS_INFO_SUCCESS } from '../../constants/atcionsNames';

const initialState = [];

export const mainTableReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_USERS_INFO_SUCCESS:
            return [ ...action.payload ];

        default:
            return state;
    }
};
