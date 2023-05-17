import { Modal } from 'components/Modal/Modal';
import cls from './UploadModal.module.scss';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';
import { useState } from 'react';
import { axiosInstance } from 'api/axios';
import { useAppSelector } from 'store';
import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru';

interface UploadModalProps {
    onClose: () => void;
}

dayjs.locale(ru);

export const UploadModal = ({ onClose }: UploadModalProps) => {
    const [name, setName] = useState('');
    const user = useAppSelector((store) => store.user.data);
    const [file, setFile] = useState<any>();
    const onUploadClick = async () => {
        if (name && file) {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('docFile', file[0]);
            formData.append('size', '1');
            formData.append('own', String(user.id));
            formData.append('date', String(dayjs().format('DD MMMM YYYY HH:mm')));
            axiosInstance.post('documents/', formData);
            onClose();
        }
    };
    return (
        <Modal
            onClose={onClose}
            className={cls.uploadModal}
        >
            <p>Название</p>
            <Input
                placeholder='Название'
                autoFocus
                size='small'
                className={cls.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label className={cls.inputFile}>
                <input
                    type='file'
                    name='file'
                    onChange={(e) => setFile(e.target.files)}
                />
                <span>Выберите файл</span>
            </label>
            <Button
                size='small'
                variant='primary'
                onClick={onUploadClick}
            >
                Загрузить
            </Button>
        </Modal>
    );
};
