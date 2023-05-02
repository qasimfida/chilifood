import * as React from 'react';
import { useState } from 'react';
import { BorderedBox, DatesWrapper } from './styles';
import { Day } from './Day';
import { IDate } from '../../types/Days';
import { useTranslation } from 'react-i18next';
function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const Days: React.FC<any> = () => {
    const { i18n } = useTranslation();
    const dates: IDate[] = [
        { id: 0, month: 'November', day: 'MON', date: '01', locked: true },
        { id: 1, month: 'December', day: 'TUE', date: '02' },
        { id: 2, month: 'January', day: 'WED', date: '03' },
        { id: 3, month: 'April', day: 'THR', date: '04' },
        { id: 4, month: 'July', day: 'FRI', date: '05', off: true },
        { id: 5, month: 'May', day: 'SAT', date: '06' },
        { id: 6, month: 'November', day: 'SUN', date: '07' },
    ];
    const [active, setActive] = useState<number>(2);
    const handleChange = (event: any, newValue: any) => {
        if (newValue !== 4) {
            setActive(newValue);
        }
    };
    const handleClick = (item: IDate) => {
        if (!item.off) {
            setActive(item.id);
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
                {dates.map((item, index) => {
                    const cls = `${
                        item.off ? 'disabled' : item.locked ? 'locked' : active === item.id ? 'active' : ''
                    }`;
                    return (
                        <Day
                            {...a11yProps(index)}
                            item={item}
                            className={cls}
                            key={`day=${item.id}`}
                            onClick={() => handleClick(item)}
                        />
                    );
                })}
            </DatesWrapper>
        </BorderedBox>
    );
};

export default Days;
