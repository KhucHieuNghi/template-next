import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { customerSlice, getCustomerByIdThunk } from './customerSlice';
import useAppAction from '~/utils/hooks/redux';

export const { actions } = customerSlice;

//* Hook V2
export const useCustomer = (id: string) => {
    const dispatch = useDispatch<any>();
    const customer = useSelector((props: any) => props.customerv2, shallowEqual);

    useEffect(() => {
        const promise = dispatch(getCustomerByIdThunk(id));
        return () => { promise.abort(); };
    }, []);

    return customer;
};

export const updateInfo = () => useAppAction(actions.updateInfo);
