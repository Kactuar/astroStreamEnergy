import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HoroscopeSign } from 'widgets/HoroscopeSign';
import signAll from 'shared/mock/sign';
import { observer } from 'mobx-react-lite';
import cls from './MainPage.module.scss';
import { useAppStore } from 'app/providers/StoreProvider/ui/StoreProvider';

const MainPage = observer(() => {
    const { t } = useTranslation();
    const { signStore } = useAppStore();
    return (
        <div className={classNames(cls.signBlock, {})}>
            {signAll.map((elem) => (
                <div onClick={() => signStore.setSign(elem.request)} key={elem.name}>
                    <HoroscopeSign
                        name={elem.name}
                        date={elem.date}
                        Icon={elem.icon}
                    />
                </div>
            ))}
        </div>
    );
});

export default MainPage;
