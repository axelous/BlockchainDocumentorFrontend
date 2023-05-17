import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import cls from '../Modal.module.scss';

interface DeclarationModalProps {
    onClose: () => void;
}

export const DeclarationModal = ({ onClose }: DeclarationModalProps) => {
    return (
        <Modal
            onClose={onClose}
            className={cls.modal}
        >
            <div className={cls.content}>
                <ul>
                    <p>Документы, обязательные для декларирования</p>
                    <li>1. мебель для медучреждений;</li>
                    <li>
                        2. средства передвижения и перемещения больных: носилки, кресла-коляски, ходунки, тележки и пр.;
                    </li>
                    <li>
                        3. на применяемые в медицине тест-системы, антигены, а также препараты для диагностики и
                        питательные среды, используемые в ветеринарии.
                    </li>
                </ul>
            </div>
            <Button
                size='small'
                variant='orange'
                onClick={onClose}
                className={cls.back}
            >
                назад
            </Button>
        </Modal>
    );
};
