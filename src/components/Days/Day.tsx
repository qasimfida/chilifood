import React from 'react';
import { Badge, Date, Header, LockIcon, Month, StyledDay, StyledWrapper, Wrapper } from './styles';
import { IDate } from '../../types/Days';
interface DayProps {
    item: IDate;
    onClick?: () => void;
    className?: string;
}
const Node = ({ date, day, locked = false, month, off = false }: any) => {
    return (
        <StyledWrapper>
            <Header>
                <Date component="span">{day}</Date>
                {off ? <Badge>off</Badge> : locked ? <LockIcon /> : null}
            </Header>
            <StyledDay>{date}</StyledDay>
            <Month component="span" className="month">
                {month}
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
