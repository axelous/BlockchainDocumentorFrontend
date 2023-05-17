import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    size: 'small' | 'medium';
}

export const Input = ({ size, className, ...props }: InputProps) => {
    return (
        <input
            {...props}
            className={clsx(cls.input, cls[size], className)}
        />
    );
};
