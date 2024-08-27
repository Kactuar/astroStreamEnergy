import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { HoroscopeSign } from 'widgets/HoroscopeSign';
import signAll from 'shared/mock/sign';
import { observer } from 'mobx-react-lite';
import { useAppStore } from 'app/providers/StoreProvider/ui/StoreProvider';
import cls from './MainPage.module.scss';

const MainPage = observer(() => {
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
