import React, {useEffect} from 'react';
const tg = window.Telegram.WebApp;

const Header = () => {

    const onClose = () => {
        return tg.close();
    }
    return (
        <div>
            <button onClick={onClose}>Закрыть</button>
            <div>User {tg.initDataUnsafe?.user?.username}</div>
        </div>
    );
};

export default Header;
