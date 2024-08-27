import { makeAutoObservable, runInAction } from 'mobx';
import { Api } from 'shared/api/api';
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils';

type Horoscope = {
    horoscope: string;
    sign: string;
    language: string;
    period: string;
}

class DetailPageStore {
    horoscope: IPromiseBasedObservable<Horoscope | null> | null = null;
    loading: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    getHoroscopeAction = (sign: string) => {
        this.loading = true;
        this.horoscope = fromPromise(
            Api.post<Horoscope>('/get_horoscope/',
                { sign, language: 'original', period: 'today' })
                .then(response => {
                    runInAction(() => {
                        this.loading = false;
                    });
                    return response.data;
                })
                .catch(error => {
                    runInAction(() => {
                        console.error('Failed to fetch horoscope:', error);
                        this.loading = false;
                    });
                    return null;
                }),
        );
    };
}

export default new DetailPageStore();
