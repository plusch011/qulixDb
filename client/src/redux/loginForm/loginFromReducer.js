const initialState = {};

export const loginFormReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_PROFILE_INFO_SUCCESS':
            return { ...action.payload };

        case 'GET_PROFILE_INFO_ERROR':
            return { ...action.payload };

        default:
            return state;
    }
};
