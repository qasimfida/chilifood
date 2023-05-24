import * as React from 'react';
import { useState } from 'react';
import {
    Container,
    FormControl,
    InputLabel,
    Link,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import Layout1 from '../../layout/Layout1';
import { PayButton, TextArea, Typo, Wrapper } from './styles';
import { useTranslation } from 'react-i18next';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { isFriday, isMonday, isSaturday } from 'date-fns';

const CheckOut: React.FC<any> = () => {
    const [value, setValue] = useState<number | number>(0);
    const [open, setOpen] = useState<boolean>(false);
    const [date, setDate] = useState<Date | null>(null);
    const { i18n } = useTranslation();
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

    const formattedDate = date ? date.toDateString() : 'Mon Jan 01 2023';
    const options = [
        { label: '210 kd, 28 days 1 (Fri, Sat Off)', value: 0, name: '210 kd, 28 days 1' },
        { label: '210 kd, 28 days 2 (Fri, Sat Off)', value: 1, name: '210 kd, 28 days 2' },
        { label: '210 kd, 28 days 3 (Fri, Sat Off)', value: 2, name: '210 kd, 28 days 3' },
    ];
    return (
        <Layout1 title={'Checkout'}>
            <Wrapper dir={i18n.dir()}>
                <Container>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Details</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Address</TableCell>
                                <TableCell>
                                    <Link href="#">Alkarim Block 11..</Link>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Restaurant</TableCell>
                                <TableCell>Chili Food</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Plan</TableCell>
                                <TableCell>Submatic</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Package</TableCell>
                                <TableCell>
                                    <FormControl size="small">
                                        <InputLabel id="my-select-label">Package</InputLabel>
                                        <Select
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
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Start Date</TableCell>
                                <TableCell>
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
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Price</TableCell>
                                <TableCell>150Kd</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}>
                                    <Typo>Leave a Note</Typo>
                                    <TextArea placeholder="Allergies.., Dislikes.." multiline maxRows={12}></TextArea>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <PayButton color="primary">Pay</PayButton>
                </Container>
            </Wrapper>
        </Layout1>
    );
};

export default CheckOut;
