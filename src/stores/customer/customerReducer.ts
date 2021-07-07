import { CUSTOMER_GET_INFO } from './customerAction';
import { IAction, IInitState } from './customerType';

const counterReducer = (state:IInitState = { info: {} }, action: IAction) => {
    switch (action.type) {
    case CUSTOMER_GET_INFO:
        return { ...state, info: { ...action.payload } };
    default:
        return { ...state };
    }
};

export default counterReducer;
