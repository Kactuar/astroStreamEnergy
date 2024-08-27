import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTelegram } from 'shared/hooks/useTelegram';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { user, onClose } = useTelegram();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <h1 className={classNames(cls.Title)}>Гороскоп на</h1>
            <div className={classNames(cls.LinkBlock)}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/"
                    className={cls.mainLink}
                >
                    Назад
                </AppLink>
                <button onClick={onClose}>Закрыть</button>
                <div>User {user?.username}</div>
            </div>
        </div>
    );
};
