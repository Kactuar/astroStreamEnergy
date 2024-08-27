import { createContext, useContext } from 'react';
import RootStore from './store';

export const StoreContext = createContext<RootStore | null>(null);

export const useAppStore = () => {
    const store = useContext(StoreContext);
    if (!store) throw new Error('Use App store within provider!');
    return store;
};
