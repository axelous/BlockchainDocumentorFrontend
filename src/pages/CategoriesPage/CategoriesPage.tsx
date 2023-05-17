import { CertModal } from 'components/BlockchainList/CertModal/CertModal';
import cls from './CategoriesPage.module.scss';
import { CertDocumentModal } from 'components/BlockchainList/CertDocumentModal/CertDocumentModal';
import { DeclarationDocumentModal } from 'components/BlockchainList/DeclarationDocumentModal/DeclarationDocumentModal';
import { DeclarationModal } from 'components/BlockchainList/DeclarationModal/DeclarationModal';
import { useState } from 'react';
import CertImage from 'assets/images/cert.png';
import CertDocumentImage from 'assets/images/certDocument.png';
import DeclarationImage from 'assets/images/declaration.png';
import DeclarationDocumentImage from 'assets/images/declarationDocument.png';
import { AuthLayout } from 'layouts/AuthLayout';

type Modals = 'cert' | 'certDocument' | 'declaration' | 'declarationDocument' | '';

export const CategoriesPage = () => {
    const [modal, setModal] = useState<Modals>('');
    const handleModal = (modal: Modals) => {
        setModal(modal);
    };
    const onCloseClick = () => {
        setModal('');
    };
    return (
        <AuthLayout className={cls.page}>
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
        </AuthLayout>
    );
};
