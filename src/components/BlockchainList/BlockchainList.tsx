import cls from './BlockchainList.module.scss';
import CertImage from 'assets/images/cert.png';
import CertDocumentImage from 'assets/images/certDocument.png';
import DeclarationImage from 'assets/images/declaration.png';
import DeclarationDocumentImage from 'assets/images/declarationDocument.png';
import { useState } from 'react';
import { CertModal } from './CertModal/CertModal';
import { DeclarationModal } from './DeclarationModal/DeclarationModal';
import { CertDocumentModal } from './CertDocumentModal/CertDocumentModal';
import { DeclarationDocumentModal } from './DeclarationDocumentModal/DeclarationDocumentModal';

type Modals = 'cert' | 'certDocument' | 'declaration' | 'declarationDocument' | '';

export const BlockchainList = () => {
    const [modal, setModal] = useState<Modals>('');
    const handleModal = (modal: Modals) => {
        setModal(modal);
    };
    const onCloseClick = () => {
        setModal('');
    };
    return (
        <div className={cls.blockchainList}>
            <h2>Списки изделий, подлежащих обязательной сертификации и необходимых документов</h2>
            <div className={cls.list}>
                <div>
                    <img
                        src={CertImage}
                        alt='cert'
                        onClick={() => handleModal('cert')}
                    />
                    <h3>Обязательны к сертификации</h3>
                    {modal === 'cert' && <CertModal onClose={onCloseClick} />}
                </div>
                <div>
                    <img
                        src={DeclarationImage}
                        alt='declaration'
                        onClick={() => handleModal('declaration')}
                    />
                    <h3>Обязательны для декларирования</h3>
                    {modal === 'declaration' && <DeclarationModal onClose={onCloseClick} />}
                </div>
                <div>
                    <img
                        src={CertDocumentImage}
                        alt='cert document'
                        onClick={() => handleModal('certDocument')}
                    />
                    <h3>Документы для сертификации</h3>
                    {modal === 'certDocument' && <CertDocumentModal onClose={onCloseClick} />}
                </div>
                <div>
                    <img
                        src={DeclarationDocumentImage}
                        alt='declaration document'
                        onClick={() => handleModal('declarationDocument')}
                    />
                    <h3>Документы для декларирования</h3>
                    {modal === 'declarationDocument' && <DeclarationDocumentModal onClose={onCloseClick} />}
                </div>
            </div>
        </div>
    );
};
