import { combineReducers } from 'redux';
import { loadingReducer } from "./loading/loadingReducer";
import { mainTableReducer } from "./mainTable/mainTableReducer";
import { loginFormReducer} from "./loginForm/loginFromReducer";
import { errorMessageReducer } from "./errorMessage/errorMessageReducer";


export const rootReducer =  combineReducers({
    usersData: mainTableReducer,
    isLoading: loadingReducer,
    profileInfo: loginFormReducer,
    error: errorMessageReducer
});