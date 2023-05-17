import { ChangeEvent, useEffect, useState } from 'react';
import cls from './DocumentInfo.module.scss';
import { axiosInstance } from 'api/axios';
import { documentActions } from 'store/user/documentSlice';
import { useAppDispatch } from 'store';
import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru';

interface DocumentInfoProps {
    id: number;
    own: string;
    status: string;
    date: string;
}

export const DocumentInfo = ({ id, own, status, date }: DocumentInfoProps) => {
    const dispatch = useAppDispatch();
    const [data, setData] = useState<any>();
    dayjs.locale(ru);
    useEffect(() => {
        axiosInstance.get(`users/${own}/`).then((response) => setData(response.data));
    }, [own]);
    const onStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newStatus = e.target.value;
        axiosInstance.put(`documents/${id}/`, { status: newStatus }).then(() => {
            dispatch(documentActions.updateStatus({ id, status: newStatus }));
        });
    };
    return !!data ? (
        <div className={cls.documentInfo}>
            <p>Идентификатор: {data?.id}</p>
            <p>Пользователь: {data?.username}</p>
            <p>Почта: {data?.email}</p>
            <p>Дата добавления: {date}</p>
            <p>
                Статус:{' '}
                <select
                    value={status}
                    onChange={onStatusChange}
                    className={cls.select}
                >
                    <option value='отправлен в росздрав'>отправлен в росздрав</option>
                    <option value='исправить'>исправить</option>
                    <option value='принят'>принят</option>
                </select>
            </p>
        </div>
    ) : (
        <></>
    );
};
