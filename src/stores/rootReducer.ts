import {combineReducers} from 'redux';
import counterReducer from './home/homeReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
});

export default rootReducer;
