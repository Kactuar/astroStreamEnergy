import React, { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { StoreContext, useAppStore } from 'app/providers/StoreProvider/ui/StoreProvider';
import RootStore from 'app/providers/StoreProvider/ui/store';
import { useTelegram } from 'shared/hooks/useTelegram';
import i18n from 'i18next';
import '../shared/config/i18n/i18n';

function App() {
    const { theme } = useTheme();
    const { tg, user } = useTelegram();
    const { signStore } = useAppStore();

    useEffect(() => {
        tg?.ready();
        i18n.changeLanguage(user?.language_code === 'ru' ? 'ru' : 'en');
        signStore.setLanguage(user?.language_code);
    }, []);

    return (
        <div className={classNames('app', {}, [theme])}>
            <StoreContext.Provider value={new RootStore()}>
                <Suspense fallback={<PageLoader />}>
                    <Navbar />
                    <div className="ContentPage">
                        <AppRouter />
                    </div>
                </Suspense>
            </StoreContext.Provider>
        </div>
    );
}

export default App;
