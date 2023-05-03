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
        { id: 0, monthAr: 'نوفمبر', dayAr: 'الاثنين', month: 'Nov', day: 'Mon', date: '1', locked: true },
        { id: 1, monthAr: 'ديسمبر', dayAr: 'الثلاثاء', month: 'Dec', day: 'Tue', date: '2' },
        { id: 2, monthAr: 'يناير', dayAr: 'الاربعاء', month: 'Jan', day: 'Wed', date: '3' },
        { id: 3, monthAr: 'فبراير', dayAr: 'الخميس', month: 'Feb', day: 'Thr', date: '4' },
        { id: 4, monthAr: 'مارس', dayAr: 'الجمعة', month: 'Mar', day: 'Fri', date: '5', off: 'off', offAr: 'راحة' },
        { id: 5, monthAr: 'ابريل', dayAr: 'السبت', month: 'Apr', day: 'Sat', date: '6' },
        { id: 6, monthAr: 'مايو', dayAr: 'الاحد', month: 'May', day: 'Sun', date: '7' },
        { id: 3, monthAr: 'يونيو', dayAr: 'الخميس', month: 'Jun', day: 'Thr', date: '4' },
        { id: 4, monthAr: 'يوليو', dayAr: 'الجمعة', month: 'July', day: 'Fri', date: '5', off: 'off' },
        { id: 5, monthAr: 'اغسطس', dayAr: 'السبت', month: 'Aug', day: 'Sat', date: '6' },
        { id: 6, monthAr: 'سبتمبر', dayAr: 'الاحد', month: 'Sep', day: 'Sun', date: '7' },
        { id: 6, monthAr: 'اكتوبر', dayAr: 'الاحد', month: 'Oct', day: 'Sun', date: '7' },
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
