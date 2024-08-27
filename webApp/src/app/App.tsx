import React, { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import { StoreContext } from 'app/providers/StoreProvider/ui/StoreProvider';
import RootStore from 'app/providers/StoreProvider/ui/store';
import { useTelegram } from 'shared/hooks/useTelegram';

function App() {
    const { theme } = useTheme();
    const { tg } = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <div className={classNames('app', {}, [theme])}>
            <StoreContext.Provider value={new RootStore()}>
                <Suspense fallback={<PageLoader />}>
                    <Navbar />
                    <div className="content-page">
                        <AppRouter />
                    </div>
                </Suspense>
            </StoreContext.Provider>
        </div>
    );
}

export default App;
