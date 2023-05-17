import { axiosInstance } from 'api/axios';
import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from 'consts/localStorage';
import { useEffect } from 'react';
import { userActions } from 'store/user/userSlice';
import { AppRouter } from './router/AppRouter';
import { useAppDispatch, useAppSelector } from 'store';

export const App = () => {
    const dispatch = useAppDispatch();
    const auth = useAppSelector((store) => store.user.auth);
    useEffect(() => {
        if (localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY)) {
            axiosInstance.get('api/user/').then((response) => dispatch(userActions.setUser(response?.data?.data)));
        }
    }, [dispatch, auth]);
    return (
        <div className='app'>
            <AppRouter />
        </div>
    );
};

