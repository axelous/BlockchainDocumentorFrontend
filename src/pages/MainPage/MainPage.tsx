import { BlockchainInfo } from 'components/BlockchainInfo/BlockchainInfo';
import cls from './MainPage.module.scss';
import { BlockchainList } from 'components/BlockchainList/BlockchainList';
import { getRoutePersonal } from 'app/router/routes';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'store';

export const MainPage = () => {
    const auth = useAppSelector((state) => state.user.auth || '');
    const navigate = useNavigate();
    useEffect(() => {
        auth && navigate(getRoutePersonal());
    }, [auth, navigate]);
    return (
        <div className={cls.mainPage}>
            <BlockchainInfo />
            <BlockchainList />
        </div>
    );
};
