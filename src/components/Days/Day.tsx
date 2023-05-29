import React from 'react';
import { Badge, Date, LockIcon, Month, StyledDay, StyledWrapper, Wrapper } from './styles';
import { ExtendsIDay } from '../../types/restaurant';
import { Tooltip } from '@mui/material';
import { t } from 'i18next';

interface DayProps {
    day: ExtendsIDay;
    onClick?: () => void;
    className?: string;
}
const Node = (props: any) => {
    const { date, lock = false, off, month, day } = props;

    if (off) {
        return (
            <Tooltip placement="top" title={'Off Day'} disableFocusListener>
                <StyledWrapper aria-describedby={'off-day-popper'}>
                    <Badge>{t('OFF')}</Badge>
                    <Date component="span" className="date">
                        {date}
                    </Date>
                    <StyledDay>{day}</StyledDay>
                    <Month component="span" className="month">
                        {month}
                    </Month>
                </StyledWrapper>
            </Tooltip>
        );
    }
    return (
        <StyledWrapper>
            {off ? (
                <Badge>Off</Badge>
            ) : lock ? (
                <Badge variant="main" type="circle">
                    <LockIcon />
                </Badge>
            ) : null}
            <Date component="span" className="date">
                {date}
            </Date>
            <StyledDay>{day}</StyledDay>
            <Month component="span" className="month">
                {month}
            </Month>
        </StyledWrapper>
    );
};
export const Day: React.FC<DayProps> = ({ day, className, onClick }) => {
    return (
        <Wrapper
            value={day.date}
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
