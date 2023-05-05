import * as React from 'react';
import { BorderedBox, DatesWrapper } from './styles';
import { Day } from './Day';
import { useTranslation } from 'react-i18next';
import { selectDay } from '../../store/plan';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks';
import { ExtendsIDay } from '../../types/plan';
import '@mui/lab/themeAugmentation';

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const Days: React.FC<any> = () => {
    const { i18n } = useTranslation();
    const dispatch = useDispatch();
    const { days } = useAppSelector((state) => state.plan);
    const active = days.filter((i) => i.selected)[0].id;
    const handleChange = (event: any, newValue: any) => {
        if (newValue !== 4) {
            dispatch(selectDay(newValue));
        }
    };
    const handleClick = (item: ExtendsIDay) => {
        if (!item.off) {
            dispatch(selectDay(item.id));
        }
    };

    return (
        <BorderedBox>
            <DatesWrapper
                value={active}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                aria-label="scrollable auto tabs days"
                dir={i18n.dir()}
            >
                {days.map((day, index) => {
                    let cls = `${day.off ? 'disabled' : ''} ${day.locked ? 'locked' : ''}`;
                    cls += day.off ? '' : day.selected ? ' active' : '';
                    return (
                        <Day
                            {...a11yProps(index)}
                            day={day}
                            className={cls}
                            key={`day=${day.id}`}
                            onClick={() => handleClick(day)}
                        />
                    );
                })}
            </DatesWrapper>
        </BorderedBox>
    );
};

export default Days;
