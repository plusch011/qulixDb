const initialState  = {
    isLoading: false
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOADING_TRUE':
            return { isLoading: true };

        case 'SET_LOADING_FALSE':
            return { isLoading: false };
        default:
            return state;
    }
};

export default rootReducer;