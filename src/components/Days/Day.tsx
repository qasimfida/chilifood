import React from 'react';
import { Badge, Date, LockIcon, Month, StyledDay, StyledPopper, StyledWrapper, Wrapper } from './styles';
import { useTranslation } from 'react-i18next';
import { getLocaleKey } from '../../helpers/getLocaleKey';
import { ExtendsIDay } from '../../types/restaurant';
import { Popover } from '@mui/material';

interface DayProps {
    day: ExtendsIDay;
    onClick?: () => void;
    className?: string;
}
const Node = (props: any) => {
    const { i18n } = useTranslation();

    const { date, lock = false, off, month, day } = props;
    const getKey = (key: string) => {
        return getLocaleKey(key, i18n);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <>
            <StyledWrapper aria-describedby={off ? id : undefined} onClick={handleClick}>
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
            {off && (
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClick}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <StyledPopper>Off Day</StyledPopper>
                </Popover>
            )}
        </>
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
