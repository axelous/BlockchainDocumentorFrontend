import { Document } from 'components/Document/Document';
import cls from './Documents.module.scss';
import UploadIcon from 'assets/images/upload.png';
import SearchIcon from 'assets/images/search.png';
import { Input } from 'components/Input/Input';
import { DocumentInfo } from 'components/DocumentInfo/DocumentInfo';
import { UploadModal } from 'components/UploadModal/UploadModal';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { axiosInstance } from 'api/axios';
import { documentActions } from 'store/user/documentSlice';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export const Documents = () => {
    const dispatch = useAppDispatch();
    const [modal, setModal] = useState(false);
    const [date, setDate] = useState<any>();
    const user = useAppSelector((store) => store.user.data);
    const documents = useAppSelector((store) => store.document.data);
    const [q, setQ] = useState('');
    const onModalClose = () => {
        setTimeout(() => {
            setModal(false);
        }, 50);
    };
    const onModalOpen = () => {
        setModal(true);
    };
    useEffect(() => {
        const params: { [key: string]: string } = { q };
        if (date !== undefined && dayjs(date).isValid()) {
            params.date = dayjs(date).format('DD MMMM YYYY');
        }
        axiosInstance
            .get(`documents/`, { params })
            .then((response) => dispatch(documentActions.setData(response?.data)));
    }, [dispatch, q, user, modal, date]);
    return (
        <div className={cls.documents}>
            <div className={cls.header}>
                <div>
                    <h1>Сертификаты</h1>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label='Дата'
                            onChange={(date) => setDate(date)}
                        />
                    </LocalizationProvider>
                </div>
                <div>
                    <Input
                        size='small'
                        placeholder='Поиск документов'
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                    />
                    <img
                        src={SearchIcon}
                        alt='search'
                        className={cls.icon}
                    />
                </div>
            </div>
            <div className={cls.list}>
                {documents.map((document) =>
                    user.is_superuser ? (
                        <div
                            className={cls.container}
                            key={document.id}
                        >
                            <Document {...document} />
                            <DocumentInfo {...document} />
                        </div>
                    ) : (
                        <Document
                            {...document}
                            key={document.id}
                        />
                    )
                )}
            </div>
            <div className={cls.footer}>
                <img
                    src={UploadIcon}
                    alt='upload'
                    className={cls.icon}
                    onClick={onModalOpen}
                />
                {modal && <UploadModal onClose={onModalClose} />}
            </div>
        </div>
    );
};
