import { makeAutoObservable } from 'mobx';

class MainPageStore {
    sign = '';

    constructor() {
        makeAutoObservable(this);
    }

    setSign = (sign: string): undefined => {
        this.sign = sign;
    };
}

export default new MainPageStore();
