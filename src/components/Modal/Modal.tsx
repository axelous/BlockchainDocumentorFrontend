import { MouseEvent, ReactNode } from 'react';
import cls from './Modal.module.scss';
import { Portal } from 'components/Portal/Portal';
import clsx from 'clsx';

interface ModalProps {
    className?: string;
    children: ReactNode;
    onClose: () => void;
}

export const Modal = ({ className, children, onClose }: ModalProps) => {
    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };
    return (
        <Portal>
            <div className={cls.modal}>
                <div
                    className={cls.overlay}
                    onClick={onClose}
                >
                    <div
                        className={clsx(cls.content, className)}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
