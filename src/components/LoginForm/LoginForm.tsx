import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import cls from './LoginForm.module.scss';
import { getRouteMain, getRouteRegistration } from 'app/router/routes';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { axiosInstance } from 'api/axios';
import { useAppDispatch } from 'store';
import { userActions } from 'store/user/userSlice';
import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from 'consts/localStorage';

export const LoginForm = () => {
    const dispatch = useAppDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const onRegistrationClick = () => {
        navigate(getRouteRegistration());
    };
    const onBackClick = () => {
        navigate(getRouteMain());
    };

    const onLoginClick = () => {
        const obj = { username, password };
        axiosInstance
            .post('api/token/', obj)
            .then((response) => {
                localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY, response?.data.access);
                dispatch(userActions.setAuth(true));
            })
            .catch(() => {
                setPassword('');
                console.log('error');
            });
    };

    return (
        <div className={cls.container}>
            <h1>Авторизация</h1>
            <div className={cls.form}>
                <p>Логин</p>
                <Input
                    size='medium'
                    autoFocus
                    placeholder='Логин'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <p>Пароль</p>
                <Input
                    size='medium'
                    type='password'
                    placeholder='Пароль'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <Button
                variant='orange'
                size='medium'
                className={cls.loginButton}
                onClick={onLoginClick}
            >
                Go!
            </Button>
            <Button
                variant='primary'
                size='medium'
                className={cls.button}
                onClick={onRegistrationClick}
            >
                Регистрация
            </Button>
            <Button
                variant='primary'
                size='medium'
                className={cls.button}
            >
                Не помню пароль
            </Button>
            <Button
                variant='primary'
                size='medium'
                className={cls.button}
                onClick={onBackClick}
            >
                Назад
            </Button>
        </div>
    );
};
