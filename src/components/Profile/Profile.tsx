import { Avatar } from 'components/Avatar/Avatar';
import cls from './Profile.module.scss';
import clsx from 'clsx';

interface ProfileProps {
    username: string;
    className?: string;
}

export const Profile = ({ className, username }: ProfileProps) => {
    return (
        <div className={clsx(cls.profile, className)}>
            <Avatar username={username} />
            <p>{username}</p>
        </div>
    );
};
