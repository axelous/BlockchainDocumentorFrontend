import cls from './Avatar.module.scss';

interface AvatarProps {
    username: string;
}

export const Avatar = ({ username }: AvatarProps) => {
    return <div className={cls.avatar}>{username[0]}</div>;
};
