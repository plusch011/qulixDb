import store from '../store';
import { setLoadingTrue, setLoadingFalse } from '../actions';

export default function (callback, ...args) {
    store.dispatch(setLoadingTrue);
    return callback.apply(null, args)
        .finally(() => store.dispatch(setLoadingFalse))
};