import { Input } from 'components/Input/Input';
import cls from './RegistrationForm.module.scss';
import { Button } from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { getRouteLogin } from 'app/router/routes';
import { useState } from 'react';
import axios from 'axios';

export const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onBackClick = () => {
        navigate(getRouteLogin());
    };
    const onRegistrationClick = () => {
        const obj = { email, username, password };
        axios.post('http://127.0.0.1:8000/send_json/', obj).then(() => onBackClick());
    };

    return (
        <div className={cls.container}>
            <h1>Регистрация</h1>
            <div className={cls.form}>
                <p>Почта</p>
                <Input
                    size='medium'
                    placeholder='Почта'
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p>Имя пользователя</p>
                <Input
                    size='medium'
                    placeholder='Имя пользователя'
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
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
                className={cls.registrationButton}
                onClick={onRegistrationClick}
            >
                Go!
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
