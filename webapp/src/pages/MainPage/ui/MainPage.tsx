import React, { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { HoroscopeSign } from 'widgets/HoroscopeSign';
import signAll from 'shared/mock/sign';
import { observer } from 'mobx-react-lite';
import { useAppStore } from 'app/providers/StoreProvider/ui/StoreProvider';
import { useTelegram } from 'shared/hooks/useTelegram';
import cls from './MainPage.module.scss';

const MainPage = observer(() => {
    const { signStore } = useAppStore();
    const { user } = useTelegram();

    useEffect(() => {
        signStore.setLanguage(user?.language_code);
    }, []);

    return (
        <div className={classNames(cls.SignBlock, {})}>
            {signAll.map((elem) => (
                <div onClick={() => signStore.setRequestParam(elem.request, signStore.language)} key={elem.name}>
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
