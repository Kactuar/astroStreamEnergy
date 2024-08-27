import { makeAutoObservable } from 'mobx';

class MainPageStore {
    sign = '';

    language = '';

    constructor() {
        makeAutoObservable(this);
    }

    setSign = (sign: string): undefined => {
        this.sign = sign;
    };

    setLanguage = (language: string): undefined => {
        this.language = language;
    };

    setRequestParam = (sign: string, language: string) => {
        this.setSign(sign);
        this.setLanguage(language);
    };
}

export default new MainPageStore();
