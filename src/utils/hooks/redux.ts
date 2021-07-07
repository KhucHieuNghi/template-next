import { useDispatch } from 'react-redux';

const useAppAction = (action) => {
    const dispatch = useDispatch();
    return (...args) => dispatch(action(...args));
};

export default useAppAction;
