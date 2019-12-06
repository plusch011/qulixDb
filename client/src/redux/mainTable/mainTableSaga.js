import { put, takeEvery, call } from 'redux-saga/effects';
import { getUsersInfoSuccess } from './mainTableActions';
import { setLoadingTrue, setLoadingFalse } from '../loading/loadingActions';
import { GET_USERS_INFO, SET_ERROR_DATA } from '../../constants/atcionsNames';
import httpController from "../../services/httpController";


function* addUsersInfoToStore() {
    try {
        yield put(setLoadingTrue);
        const data = yield call(httpController.getUsersInfo);
        yield put(getUsersInfoSuccess(data));
    } catch (e) {
        yield put({ type: SET_ERROR_DATA, payload: e });
    } finally {
        yield put(setLoadingFalse);
    }
}


export function* addMainTableSaga() {
    yield takeEvery(GET_USERS_INFO, addUsersInfoToStore);
}
