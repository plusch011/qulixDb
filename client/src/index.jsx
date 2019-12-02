import React from 'react';
import { render } from 'react-dom';
import App from './components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { rootSaga } from "./redux/rootSaga";
import createSagaMiddleWare from 'redux-saga';


const sagaMiddleware = createSagaMiddleWare();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);

