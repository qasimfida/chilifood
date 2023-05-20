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
import { PayButton, TextArea, Title, Wrapper } from './styles';
import { useTranslation } from 'react-i18next';

const CheckOut: React.FC<any> = () => {
    const [value, setValue] = useState<any>('1');
    const { i18n } = useTranslation();
    return (
        <Layout1 title={'Checkout'}>
            <Wrapper dir={i18n.dir()}>
                <Container>
                    <Title>
                        <Typography variant="h6"> Checkout Details</Typography>
                    </Title>
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
                                    <Link href="#">Alkarim Block 11</Link>
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
                                            value={value}
                                            onChange={setValue}
                                        >
                                            <MenuItem value={1}>Option 1</MenuItem>
                                            <MenuItem value={2}>Option 2</MenuItem>
                                            <MenuItem value={3}>Option 3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Start Date</TableCell>
                                <TableCell>Sunday 6, Nov 2023</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Price</TableCell>
                                <TableCell>150Kd</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}>
                                    <TextArea placeholder="Allergies.., Dislikes.." multiline rows={4}></TextArea>
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
