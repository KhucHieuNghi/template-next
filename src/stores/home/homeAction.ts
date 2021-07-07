import { IIncrementCounter, IDecrementCounter } from './homeType';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const UPDATE_TIME = 'UPDATE_TIME';
//* Action
// Action Creator
export const incrementCounter = (): IIncrementCounter => ({
    type: INCREMENT_COUNTER,
});

export const decrementCounter = (): IDecrementCounter => ({
    type: DECREMENT_COUNTER,
});

export const updateTime = (payload): any => ({
    type: UPDATE_TIME,
    payload,
});
