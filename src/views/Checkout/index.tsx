import * as React from 'react';
import { useState } from 'react';
import {
    Box,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Table,
    TableBody,
    TableRow,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format, isFriday, isMonday, isSaturday } from 'date-fns';
import { arSA, enUS } from 'date-fns/locale';
// Components
import Layout1 from '../../layout/Layout1';
// Hooks and Utils
import { useIsAuthenticated } from '../../hooks';
// Store
import { restaurantsData } from '../../store/restaurant/restaurants';
// Types
import { IPlan, IRestaurant } from '../../types/restaurant';
// Styles
import { Cell, LastCell, LinkText, PayButton, StyleLink, TextArea, Wrapper } from './styles';

const CheckOut: React.FC<any> = () => {
    const { i18n, t } = useTranslation();
    const user = useIsAuthenticated();
    const [value, setValue] = useState<string>('0');
    const [open, setOpen] = useState<boolean>(false);
    const [date, setDate] = useState<Date>(new Date());
    const [select, setSelect] = useState<boolean>(false);
    const handleDropDownChange = (event: SelectChangeEvent) => {
        setValue(event.target.value as string);
    };
    const toggleOpen = () => {
        setOpen(!open);
    };

    const isWeekdayDisabled = (date: Date) => {
        return isMonday(date) || isFriday(date) || isSaturday(date);
    };

    const onChange = (date: Date | null) => {
        if (date) {
            setDate(date);
        }
    };

    const toggleSelect = () => {
        setSelect(!select);
    };

    const options = [
        { label: '210 Kd, 28 days (without off)', value: 0, name: '210 kd, 28 days' },
        { label: '195 Kd, 24 days (Frid off)', value: 1, name: '195 Kd, 24 days' },
        { label: '170 Kd, 28 days (Frid, Sat off)', value: 2, name: '170 Kd, 28 days' },
    ];

    const formattedDate = format(date, 'EEE, dd, mm, yyyy', { locale: i18n.language === 'ar' ? arSA : enUS });
    const plan_id = localStorage.getItem('plan');
    const restaurant_id = localStorage.getItem('restaurant');
    const data = React.useMemo(() => {
        return restaurantsData[i18n.language];
    }, [i18n]);
    const restaurant = data.restaurants.find((i: IRestaurant) => i.id === restaurant_id);
    const plan = data.restaurantPlans.find((i: IPlan) => i.id === plan_id);

    return (
        <Layout1 title={t('CHECKOUT')}>
            <Wrapper dir={i18n.dir()}>
                <Container>
                    <Table>
                        <TableBody dir={i18n.dir()}>
                            <TableRow>
                                <Cell>{t('RESTAURANT')}</Cell>
                                <Cell>{restaurant && restaurant.name}</Cell>
                            </TableRow>

                            <TableRow>
                                <Cell>{t('PLAN')}</Cell>
                                <Cell>{plan && plan.name}</Cell>
                            </TableRow>
                            <TableRow>
                                <Cell>{t('PACKAGE')}</Cell>
                                <Cell>
                                    {!select ? (
                                        <LinkText onClick={toggleSelect}>{options[parseInt(value)]?.label}</LinkText>
                                    ) : (
                                        <FormControl size="small">
                                            <InputLabel id="my-select-label">{t('PACKAGE')}</InputLabel>
                                            <Select
                                                open={select}
                                                onClose={toggleSelect}
                                                labelId="my-select-label"
                                                id="my-select"
                                                value={value}
                                                onChange={handleDropDownChange}
                                                renderValue={(select: string) => {
                                                    const option = options[parseInt(select)];
                                                    return option.name;
                                                }}
                                            >
                                                {options.map((option) => {
                                                    return (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>
                                                    );
                                                })}
                                            </Select>
                                        </FormControl>
                                    )}
                                </Cell>
                            </TableRow>
                            <TableRow>
                                <Cell>{t('START_DATE')}</Cell>
                                <Cell>
                                    {!open ? (
                                        <LinkText onClick={toggleOpen}>{formattedDate}</LinkText>
                                    ) : (
                                        <DatePicker
                                            open={open}
                                            onOpen={toggleOpen}
                                            onClose={toggleOpen}
                                            value={date}
                                            onChange={onChange}
                                            shouldDisableDate={isWeekdayDisabled}
                                            disablePast
                                            className="m-0"
                                            label={t('SELECT_DATE')}
                                            slotProps={{
                                                popper: {
                                                    className:
                                                        i18n.language === 'ar'
                                                            ? 'arabic-date-picker '
                                                            : 'en-date-picker',
                                                },
                                            }}
                                        />
                                    )}
                                </Cell>
                            </TableRow>
                            <TableRow>
                                <Cell>{t('ADDRESS')}</Cell>
                                <Cell>
                                    <StyleLink href="/profile?id=0">
                                        {user.house} {user.block} {user.avenue} {user.city?.label}
                                    </StyleLink>
                                </Cell>
                            </TableRow>
                            {/* <TableRow>
                                <Cell>Price</Cell>
                                <Cell>150Kd</Cell>
                            </TableRow> */}
                            <TableRow>
                                <LastCell colSpan={2} dir={i18n.dir()}>
                                    <Box>{t('LEAVE_A_NOTE')}</Box>
                                    <TextArea
                                        placeholder={t('ALERGIES_AND_DISLIKES') || ''}
                                        multiline
                                        maxRows={12}
                                    ></TextArea>
                                </LastCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <PayButton color="primary">{t('PAY')}</PayButton>
                </Container>
            </Wrapper>
        </Layout1>
    );
};

export default CheckOut;
