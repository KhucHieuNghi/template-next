export const CUSTOMER_GET_INFO = 'CUSTOMER_GET_INFO';

//* Action
// Action Creator

export const getCustomerInfo = (payload): any => ({
    type: CUSTOMER_GET_INFO,
    payload,
});
