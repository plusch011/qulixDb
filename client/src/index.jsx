import React from 'react';
import { render } from 'react-dom';
import App from './components/index';
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);


render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);


serviceWorker.register();
