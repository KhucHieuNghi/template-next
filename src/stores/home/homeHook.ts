import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IInitState } from './homeType';
import { demoApi } from '~/services';
import { updateTime } from './homeAction';

// const result = await demoApi.getInfo();
interface IProps {
    home: IInitState
}
//* Hook
export const useHome = () => {
    const dispatch = useDispatch();
    const home = useSelector((props: IProps) => props.home);

    const getHealth = async () => {
        const result = await demoApi.getInfo();
        dispatch(updateTime(result.data));
    };

    useEffect(() => { getHealth(); }, []);

    return { value: home.value, getHealth };
};
