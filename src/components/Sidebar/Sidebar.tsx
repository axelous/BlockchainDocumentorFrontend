import cls from './Sidebar.module.scss';
import CertIcon from 'assets/images/certIcon.png';
import ToolsIcon from 'assets/images/tools.png';
import clsx from 'clsx';
import { Profile } from 'components/Profile/Profile';
import { useAppDispatch, useAppSelector } from 'store';
import { Button } from 'components/Button/Button';
import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from 'consts/localStorage';
import { userActions } from 'store/user/userSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { getRouteCategories, getRoutePersonal } from 'app/router/routes';

export const Sidebar = () => {
    const dispatch = useAppDispatch();
    const username = useAppSelector((store) => store.user.data.username);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const onLogoutClick = () => {
        localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
        dispatch(userActions.logout());
    };
    return (
        <div className={cls.sidebar}>
            <button
                className={clsx(cls.button, pathname.includes('profile') && cls.current)}
                onClick={() => navigate(getRoutePersonal())}
            >
                <img
                    src={CertIcon}
                    alt='cert'
                />
                <p>Мои сертификаты</p>
            </button>
            <button
                className={clsx(cls.button, pathname.includes('categories') && cls.current)}
                onClick={() => navigate(getRouteCategories())}
            >
                <img
                    src={ToolsIcon}
                    alt='tools'
                />
                <p>Документы по категориям</p>
            </button>
            <Profile
                className={cls.profile}
                username={username || ''}
            />
            <Button
                className={cls.logout}
                size='small'
                variant='orange'
                onClick={onLogoutClick}
            >
                Выйти
            </Button>
        </div>
    );
};
