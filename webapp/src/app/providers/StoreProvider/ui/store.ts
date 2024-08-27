import DetailPageStore from 'pages/DetailPage/store/DetailPageStore';
import MainPageStore from 'pages/MainPage/store/MainPageStore';

class RootStore {
    horoscopeStore = DetailPageStore;

    signStore = MainPageStore;
}

export default RootStore;
