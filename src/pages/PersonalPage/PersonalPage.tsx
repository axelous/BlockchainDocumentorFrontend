import { Documents } from 'components/Documents/Documents';
import { useAppSelector } from 'store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRouteMain } from 'app/router/routes';
import { AuthLayout } from 'layouts/AuthLayout';
import cls from './PersonalPage.module.scss';

export const PersonalPage = () => {
    const auth = useAppSelector((state) => state.user.auth || '');
    const navigate = useNavigate();
    useEffect(() => {
        !auth && navigate(getRouteMain());
    }, [auth, navigate]);
    return (
        <AuthLayout className={cls.page}>
            <Documents />
        </AuthLayout>
    );
};
