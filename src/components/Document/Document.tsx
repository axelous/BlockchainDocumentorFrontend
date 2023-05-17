import cls from './Document.module.scss';
import DocumentImage from 'assets/images/document.png';
import ContextMenuIcon from 'assets/images/contextMenu.png';
import { Button } from 'components/Button/Button';
import { axiosInstance } from 'api/axios';
import { useAppDispatch } from 'store';
import { documentActions } from 'store/user/documentSlice';

interface DocumentProps {
    id: number;
    name: string;
    docFile: string;
    status: string;
}

export const Document = ({ id, name, docFile, status }: DocumentProps) => {
    const dispatch = useAppDispatch();
    const onDeleteClick = () => {
        axiosInstance.delete(`documents/${id}/`).then(() => dispatch(documentActions.delete(id)));
    };
    return (
        <div className={cls.document}>
            <div className={cls.container}>
                <img
                    src={DocumentImage}
                    alt='document'
                />
                <h3>{name}</h3>
            </div>
            <p className={cls.status}>{status}</p>
            <div className={cls.contextMenuIcon}>
                <img
                    src={ContextMenuIcon}
                    alt='menu'
                />
                <div className={cls.contextMenu}>
                    <Button
                        variant='orange'
                        size='small'
                    >
                        <a
                            className={cls.link}
                            href={docFile}
                            target='_blank'
                            rel='noreferrer'
                        >
                            Посмотреть
                        </a>
                    </Button>
                    <Button
                        variant='orange'
                        size='small'
                        onClick={onDeleteClick}
                    >
                        Удалить
                    </Button>
                </div>
            </div>
        </div>
    );
};
