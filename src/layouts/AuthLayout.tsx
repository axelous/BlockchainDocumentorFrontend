import { Sidebar } from 'components/Sidebar/Sidebar';
import { ReactNode } from 'react';
import cls from './AuthLayout.module.scss';
import clsx from 'clsx';

interface AuthLayoutProps {
    children: ReactNode;
    className?: string;
}

export const AuthLayout = ({ children, className }: AuthLayoutProps) => {
    return (
        <div className={cls.authLayout}>
            <Sidebar />
            <div className={className}>{children}</div>
        </div>
    );
};
