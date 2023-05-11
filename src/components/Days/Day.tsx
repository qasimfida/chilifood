import React from 'react';
import { Badge, Date, LockIcon, Month, StyledDay, StyledWrapper, Wrapper } from './styles';
import { useTranslation } from 'react-i18next';
import { getLocaleKey } from '../../helpers/getLocaleKey';
import { ExtendsIDay } from '../../types/restaurant';
interface DayProps {
    day: ExtendsIDay;
    onClick?: () => void;
    className?: string;
}
const Node = (props: any) => {
    const { i18n } = useTranslation();

    const { date, lock = false, off } = props;
    const getKey = (key: string) => {
        return getLocaleKey(key, i18n);
    };
    console.log({ props });
    return (
        <StyledWrapper>
            {off ? (
                <Badge>off</Badge>
            ) : lock ? (
                <Badge variant="main" type="circle">
                    <LockIcon />
                </Badge>
            ) : (
                <div />
            )}
            <Date component="span" className="date">
                {date}
            </Date>
            <StyledDay>{props[getKey('day')]}</StyledDay>
            <Month component="span" className="month">
                {props[getKey('month')]}
            </Month>
        </StyledWrapper>
    );
};
export const Day: React.FC<DayProps> = ({ day, className, onClick }) => {
    return (
        <Wrapper
            key={`${day.date}`}
            label={<Node {...day} />}
            className={className}
            onClick={() => {
                if (onClick) {
                    onClick();
                }
            }}
        />
    );
};
