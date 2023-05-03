import React from 'react';
import { Badge, Date, LockIcon, Month, StyledDay, StyledWrapper, Wrapper } from './styles';
import { IDate } from '../../types/Days';
import { useTranslation } from 'react-i18next';
interface DayProps {
    item: IDate;
    onClick?: () => void;
    className?: string;
}
const Node = (props: any) => {
    const { i18n } = useTranslation();
    const localeKey = (key: string) => {
        const lng = i18n.language === 'ar' ? i18n.language.charAt(0).toUpperCase() + i18n.language.slice(1) : '';
        return `${key}${lng}`;
    };
    const { date, locked = false } = props;

    return (
        <StyledWrapper>
            {props[localeKey('off')] ? (
                <Badge>{props[localeKey('off')]}</Badge>
            ) : locked ? (
                <Badge>
                    <LockIcon />
                </Badge>
            ) : (
                <div />
            )}
            <StyledDay>{date}</StyledDay>
            <Date component="span">{props[localeKey('day')]}</Date>
            <Month component="span" className="month">
                {props[localeKey('month')]}
            </Month>
        </StyledWrapper>
    );
};
export const Day: React.FC<DayProps> = ({ item, className, onClick }) => {
    return (
        <Wrapper
            key={`${item.date}`}
            label={<Node {...item} />}
            className={className}
            onClick={() => {
                if (onClick) {
                    onClick();
                }
            }}
        />
    );
};
