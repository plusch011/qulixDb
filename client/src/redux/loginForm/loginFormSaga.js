import { put, takeEvery, call } from 'redux-saga/effects';
import { getProfileInfoSuccess, getProfileInfoError } from '../loginForm/loginFormActions';
import { setLoadingTrue, setLoadingFalse } from '../loading/loadingActions';
import httpController from "../../services/httpController";


function* addProfileDataToStore(action) {
    try {
        yield put(setLoadingTrue);
        const data = yield call( httpController.submitLogin, action.payload );
        yield put( getProfileInfoSuccess(data) );
    } catch (e) {
        yield put( getProfileInfoError(e) )
    } finally {
        yield put(setLoadingFalse);
    }
}


export function* addLoginFormSaga() {
    yield takeEvery('USER_LOGIN', action => addProfileDataToStore(action));
}
