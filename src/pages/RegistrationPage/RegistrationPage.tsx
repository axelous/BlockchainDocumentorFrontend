import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import cls from './RegistrationPage.module.scss';
import { getRoutePersonal } from 'app/router/routes';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'store';

export const RegistrationPage = () => {
    const auth = useAppSelector((state) => state.user.auth || '');
    const navigate = useNavigate();
    useEffect(() => {
        auth && navigate(getRoutePersonal());
    }, [auth, navigate]);
    return (
        <div className={cls.registrationPage}>
            <RegistrationForm />
        </div>
    );
};
