import { put, takeLatest, call } from 'redux-saga/effects';
import { getUsersInfoSuccess, getUsersInfoError } from './mainTableActions';
import { setLoadingTrue, setLoadingFalse } from '../loading/loadingActions';
import httpController from "../../services/httpController";


function* addUsersDataToStore() {
    try {
        yield put(setLoadingTrue);
        const data = yield call( httpController.getUsersInfo );
        yield put( getUsersInfoSuccess(data) );
    } catch (e) {
        yield put( getUsersInfoError(e) )
    } finally {
        yield put(setLoadingFalse);
    }
}


export function* addMainTableSaga() {
    yield takeLatest('GET_USERS_DATA', addUsersDataToStore);
}
