const rootReducer = (state = { id: "som" }, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return { ...state, userData: action.payload };

        default:
            return state;
    }
};

export default rootReducer;