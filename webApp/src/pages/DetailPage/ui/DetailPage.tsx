import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { useAppStore } from 'app/providers/StoreProvider/ui/StoreProvider';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const DetailPage = observer(() => {
    const { t } = useTranslation('detail');
    const { signStore, horoscopeStore } = useAppStore();

    useEffect(() => {
        horoscopeStore.getHoroscopeAction(signStore.sign);
    }, [signStore.sign, horoscopeStore]);

    if (horoscopeStore.loading || (horoscopeStore.horoscope && horoscopeStore.horoscope.state === 'pending')) {
        return <PageLoader />;
    }
    //@ts-ignore
    const horoscope = horoscopeStore.horoscope?.value?.horoscope;

    return (
        <div>
            <p>{horoscope}</p>
        </div>
    );
});

export default DetailPage;
