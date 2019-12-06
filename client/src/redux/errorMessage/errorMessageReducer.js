import { SET_ERROR_DATA, DELETE_ERROR_DATA  } from '../../constants/atcionsNames';

const initialState = null;

export const errorMessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR_DATA:
            return action.payload;

        case DELETE_ERROR_DATA:
            return null;

        default:
            return state;
    }
};
