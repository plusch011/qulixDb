const initialState = false;

export const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOADING_TRUE':
            return true;

        case 'SET_LOADING_FALSE':
            return false;

        default:
            return state;
    }
};
