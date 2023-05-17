import { LoginForm } from 'components/LoginForm/LoginForm';
import cls from './LoginPage.module.scss';
import { getRoutePersonal } from 'app/router/routes';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'store';

export const LoginPage = () => {
    const id = useAppSelector((state) => state.user.data.id || '');
    const navigate = useNavigate();
    useEffect(() => {
        id && navigate(getRoutePersonal());
    }, [id, navigate]);
    return (
        <div className={cls.loginPage}>
            <LoginForm />
        </div>
    );
};
