import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import cls from '../Modal.module.scss';

interface DeclarationDocumentModalProps {
    onClose: () => void;
}

export const DeclarationDocumentModal = ({ onClose }: DeclarationDocumentModalProps) => {
    return (
        <Modal
            onClose={onClose}
            className={cls.modal}
        >
            <div className={cls.content}>
                <ul>
                    <p>Документы для декларирования</p>
                    <li>1. Заполненная по образцу декларация;</li>
                    <li>2. Заявление установленной формы;</li>
                    <li>3. Учредительные и регистрационные данные производителя и заявителя (продавца, импортера);</li>
                    <li>4. Сертификаты (ИСО, ГОСТ);</li>
                    <li>5. Декларации и сертификаты соответствия;</li>
                    <li>6. Регистрационное удостоверение;</li>
                    <li>7. Протоколы проведенных испытаний;</li>
                    <li>8. Подтверждение безопасности продукции;</li>
                    <li>9. Технические условия;</li>
                    <li>10. Другие, при необходимости.</li>
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
