import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './HoroscopeSign.module.scss';

interface HoroscopeProps {
    name: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    date: string;
}

export const HoroscopeSign = ({
    name, Icon, date,
}: HoroscopeProps) => {
    return (
        <div className={classNames(cls.Sign)}>
            <AppLink to="/detail">
                <Icon className={classNames(cls.Icon)} />
                <div className={classNames(cls.Name)}>{name}</div>
                <div className={classNames(cls.Date)}>{date}</div>
            </AppLink>
        </div>
    );
};
