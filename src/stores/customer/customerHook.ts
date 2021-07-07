import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { customerApi } from '~/services';
import { getCustomerInfo } from './customerAction';

//* Hook
export const useCustomer = () => {
    const route = useRouter();
    const dispatch = useDispatch();
    const { info } = useSelector((props: any) => props.customer);

    const getInfoData = async () => {
        const result = await customerApi.getInfo((route?.query?.user || '').toString());
        dispatch(getCustomerInfo(result.data.data));
    };

    useEffect(() => { getInfoData(); }, []);

    return { info, getInfoData };
};
