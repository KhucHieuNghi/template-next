import { DECREMENT_COUNTER, INCREMENT_COUNTER, UPDATE_TIME } from './homeAction';
import { IAction, IInitState } from './homeType';

//* Reducer
const counterReducer = (state:IInitState = { value: 0 }, action: IAction) => {
    switch (action.type) {
    case INCREMENT_COUNTER:
        return { ...state, value: state.value + 1 };
    case DECREMENT_COUNTER:
        return { ...state, value: state.value - 1 };
    case UPDATE_TIME:
        return { ...state, value: action.payload };
    default:
        return { ...state };
    }
};

export default counterReducer;
