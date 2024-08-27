import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { useAppStore } from 'app/providers/StoreProvider/ui/StoreProvider';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './DetailPage.module.scss';

const DetailPage = observer(() => {
    const { t } = useTranslation('detail');
    const { signStore, horoscopeStore } = useAppStore();
    const language = signStore.language === 'ru' ? 'original' : 'translated';

    useEffect(() => {
        horoscopeStore.getHoroscopeAction(signStore.sign, language);
    }, [signStore.sign, horoscopeStore]);

    if (horoscopeStore.loading || (horoscopeStore.horoscope && horoscopeStore.horoscope.state === 'pending')) {
        return <PageLoader />;
    }
    // @ts-ignore
    const horoscope = horoscopeStore.horoscope?.value?.horoscope;

    return (
        <div>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to="/"
                className={classNames(cls.BackLink)}
            >
                {t('Назад')}
            </AppLink>
            <p>{horoscope}</p>
        </div>
    );
});

export default DetailPage;
