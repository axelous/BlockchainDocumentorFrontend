import { ButtonHTMLAttributes, ReactNode } from 'react';
import cls from './Button.module.scss';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: string | ReactNode;
    variant: 'primary' | 'orange';
    size: 'small' | 'medium';
}

export const Button = ({ className, children, variant, size, ...props }: ButtonProps) => {
    return (
        <button
            className={clsx(cls.button, cls[variant], cls[size], className)}
            {...props}
        >
            {children}
        </button>
    );
};
