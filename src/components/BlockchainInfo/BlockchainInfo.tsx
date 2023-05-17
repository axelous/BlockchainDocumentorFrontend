import { Button } from 'components/Button/Button';
import cls from './BlockchainInfo.module.scss';
import LogoImage from 'assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { getRouteLogin } from 'app/router/routes';

export const BlockchainInfo = () => {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate(getRouteLogin());
    };
    return (
        <div className={cls.blockchainInfo}>
            <div className={cls.container}>
                <h1>Blockchain Documentor</h1>
                <h2>Сертификация и регистрация медицинский изделий в два клика</h2>
                <ul>
                    <p>Наш сервис предлагает:</p>
                    <li>Безопасное хранение документов</li>
                    <li>Заверение документов ЭЦП</li>
                    <li>Отслеживание срока действия</li>
                    <li>Группировку документов</li>
                    <li>Нотариальное заверение</li>
                </ul>
                <Button
                    size='medium'
                    variant='orange'
                    onClick={handleLoginClick}
                >
                    Авторизация
                </Button>
            </div>
            <img
                src={LogoImage}
                alt='logo'
                className={cls.image}
            />
        </div>
    );
};
