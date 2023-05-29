import * as React from 'react';
import { useState } from 'react';
import { Box, Container, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableRow } from '@mui/material';
import Layout1 from '../../layout/Layout1';
import { Cell, LastCell, LinkText, PayButton, StyleLink, TextArea, Wrapper } from './styles';
import { useTranslation } from 'react-i18next';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format, isFriday, isMonday, isSaturday } from 'date-fns';
import { useIsAuthenticated } from '../../hooks';
import { restaurantsData } from '../../store/restaurant/restaurants';

const CheckOut: React.FC<any> = () => {
    const { i18n, t } = useTranslation();
    const user = useIsAuthenticated();
    const [value, setValue] = useState<number | number>(0);
    const [open, setOpen] = useState<boolean>(false);
    const [date, setDate] = useState<Date>(new Date());
    const [select, setSelect] = useState<boolean>(false);
    const handleDropDownChange = (event: any) => {
        setValue(event.target.value);
    };
    const toggleOpen = () => {
        setOpen(!open);
    };

    const isWeekdayDisabled = (date: Date) => {
        return isMonday(date) || isFriday(date) || isSaturday(date);
    };

    const onChange = (date: Date | null) => {
        console.log(date);
        if (date) {
            setDate(date);
        }
    };

    const toggleSelect = () => {
        setSelect(!select);
    };

    const options = [
        { label: '210 kd, 28 days 1 (Fri, Sat Off)', value: 0, name: '210 kd, 28 days 1' },
        { label: '210 kd, 28 days 2 (Fri, Sat Off)', value: 1, name: '210 kd, 28 days 2' },
        { label: '210 kd, 28 days 3 (Fri, Sat Off)', value: 2, name: '210 kd, 28 days 3' },
    ];
    const formattedDate = format(date, 'EEE, dd, mm, yyyy');
    const plan_id = localStorage.getItem('plan');
    const restaurant_id = localStorage.getItem('restaurant');
    const data = React.useMemo(() => {
        return restaurantsData[i18n.language];
    }, [i18n]);
    const restaurant = data.restaurants.find((i: any) => i.id === restaurant_id);
    const plan = data.restaurantPlans.find((i: any) => i.id === plan_id);
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
                                        <LinkText onClick={toggleSelect}>{options[value]?.name}</LinkText>
                                    ) : (
                                        <FormControl size="small">
                                            <InputLabel id="my-select-label">{t('PACKAGE')}</InputLabel>
                                            <Select
                                                open={select}
                                                onClose={toggleSelect}
                                                labelId="my-select-label"
                                                id="my-select"
                                                value={value as number}
                                                onChange={handleDropDownChange}
                                                renderValue={(select: number) => {
                                                    const option = options[select];
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
                                            className="m-0"
                                            disablePast
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
