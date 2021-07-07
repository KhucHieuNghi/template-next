import { combineReducers } from 'redux';
import homeReducer from './home/homeReducer';
import demoReducer from './demo/demoSlice';
import customerReducerV2 from './customerv2/customerSlice';
import customerReducer from './customer/customerReducer';

const rootReducer = combineReducers({
    home: homeReducer,
    demo: demoReducer,
    customer: customerReducer,
    customerv2: customerReducerV2,
});

export default rootReducer;
