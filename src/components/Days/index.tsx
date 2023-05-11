import * as React from 'react';
import { BorderedBox, DatesWrapper } from './styles';
import { Day } from './Day';
import { useTranslation } from 'react-i18next';
import { selectDay } from '../../store/restaurant';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks';
import { ExtendsIDay } from '../../types/restaurant';
import '@mui/lab/themeAugmentation';

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const Days: React.FC<any> = ({ days }: any) => {
    const { i18n } = useTranslation();
    const dispatch = useDispatch();
    const { activeDay } = useAppSelector((state) => state.restaurant);
    const handleChange = (event: any, newValue: any) => {
        if (newValue !== 4) {
            dispatch(selectDay(newValue));
        }
    };
    const handleClick = (item: ExtendsIDay) => {
        if (!item.off) {
            dispatch(selectDay(item.date));
        }
    };
    return (
        <BorderedBox>
            <DatesWrapper
                value={activeDay}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                aria-label="scrollable auto tabs days"
                dir={i18n.dir()}
            >
                {days.map((day: any, index: number) => {
                    let cls = `${day.off ? 'disabled' : ''} ${day.lock ? 'locked' : ''}`;
                    cls += day.off ? '' : day.date === activeDay ? ' active' : '';
                    return (
                        <Day
                            {...a11yProps(index)}
                            day={day}
                            className={cls}
                            key={`day=${day.date}`}
                            onClick={() => handleClick(day)}
                        />
                    );
                })}
            </DatesWrapper>
        </BorderedBox>
    );
};

export default Days;
