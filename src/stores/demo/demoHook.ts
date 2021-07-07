import { useSelector } from 'react-redux';
import useAppAction from '~/utils/hooks/redux';
import { demoSlice } from './demoSlice';

//* Hook

export const demoActions = demoSlice.actions;

export const useDemo = () => {
    const demo = useSelector((props: any) => props.demo);

    return demo;
};

export const useUpdate = () => useAppAction(demoActions.fetchApi);
