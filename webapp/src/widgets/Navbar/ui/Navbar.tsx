import { classNames } from 'shared/lib/classNames/classNames';
import { useTelegram } from 'shared/hooks/useTelegram';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useAppStore } from 'app/providers/StoreProvider/ui/StoreProvider';
import { observer } from 'mobx-react-lite';
import cls from './Navbar.module.scss';
import {useEffect} from "react";

interface NavbarProps {
    className?: string;
}

export const Navbar = observer(
    ({ className }: NavbarProps) => {
        const { user, onClose } = useTelegram();
        const { signStore, horoscopeStore } = useAppStore();
        const { t } = useTranslation();

        useEffect(() => {
            signStore.setLanguage(user?.language_code);
        }, []);

        const onChangeLanguage = () => {
            const language = signStore.language === 'ru' ? 'en' : 'ru';
            const reqLanguage = language === 'ru' ? 'original' : 'translated';
            signStore.setLanguage(language);
            i18n.changeLanguage(language);
            if (signStore.sign !== '') horoscopeStore.getHoroscopeAction(signStore.sign, reqLanguage);
        };

        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <h1 className={classNames(cls.Title)}>
                    {t('Гороскоп для')}
                    {' '}
                    {user?.username}
                </h1>
                <div className={classNames(cls.LinkBlock)}>
                    <button onClick={onClose} className={classNames(cls.LinkButton)}>{t('Закрыть')}</button>
                    <button onClick={onChangeLanguage} className={classNames(cls.LinkButton)}>{t('Сменить язык')}</button>
                </div>
            </div>
        );
    },
);
