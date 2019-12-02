import { all, fork } from 'redux-saga/effects';
import { addMainTableSaga } from './mainTable/mainTableSaga';
import { addLoginFormSaga } from './loginForm/loginFormSaga';


export const rootSaga = function*() {
    yield all([
        fork(addMainTableSaga),
        fork(addLoginFormSaga)
    ]);
};