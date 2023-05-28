import * as React from 'react';
import { useState } from 'react';
import {
    Box,
    Container,
    FormControl,
    InputLabel,
    Link,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    TableRow,
} from '@mui/material';
import Layout1 from '../../layout/Layout1';
import { LastCell, LinkText, PayButton, TextArea, Wrapper } from './styles';
import { useTranslation } from 'react-i18next';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format, isFriday, isMonday, isSaturday } from 'date-fns';

const CheckOut: React.FC<any> = () => {
    const [value, setValue] = useState<number | number>(0);
    const [open, setOpen] = useState<boolean>(false);
    const [date, setDate] = useState<Date | null>(null);
    const { i18n, t } = useTranslation();
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
        setDate(date);
    };

    const toggleSelect = () => {
        setSelect(!select);
    };

    const options = [
        { label: '210 kd, 28 days 1 (Fri, Sat Off)', value: 0, name: '210 kd, 28 days 1' },
        { label: '210 kd, 28 days 2 (Fri, Sat Off)', value: 1, name: '210 kd, 28 days 2' },
        { label: '210 kd, 28 days 3 (Fri, Sat Off)', value: 2, name: '210 kd, 28 days 3' },
    ];
    const currentDate = new Date();

    const formattedDate = format(currentDate, 'MMMM dd, yyyy');
    return (
        <Layout1 title={t('CHECKOUT')}>
            <Wrapper dir={i18n.dir()}>
                <Container>
                    <Table>
                        <TableBody dir={i18n.dir()}>
                            <TableRow>
                                <TableCell>{t('RESTAURANT')}</TableCell>
                                <TableCell>Chili Food</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>{t('PLAN')}</TableCell>
                                <TableCell>Submatic</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{t('PACKAGE')}</TableCell>
                                <TableCell>
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
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{t('START_DATE')}</TableCell>
                                <TableCell>
                                    {!open ? (
                                        <LinkText onClick={toggleOpen}>{date?.toString() || formattedDate}</LinkText>
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
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{t('ADDRESS')}</TableCell>
                                <TableCell>
                                    <Link href="#">Alkarim Block 11..</Link>
                                </TableCell>
                            </TableRow>
                            {/* <TableRow>
                                <TableCell>Price</TableCell>
                                <TableCell>150Kd</TableCell>
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
