import { useState } from 'react';
import { Box, Collapse, TableBody, TableCell, TableHead, TableRow, Table as MuiTable } from '@mui/material';
import { DetailsCell, MainTable, StyledCell, StyledTable, StyledTableRow, SubHeading, TableOne } from './styles';
import ArrowDropDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowDropUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTheme, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface RowData {
    id: number;
    status: string;
    restaurant: string;
    plan: string;
    period: string;
    startDate: string;
    endDate: string;
    price: string;
}

const rows: RowData[] = [
    {
        id: 1,
        status: 'Active',
        restaurant: 'Super Diet',
        plan: 'Keto',
        period: '24',
        startDate: '3-04-2022',
        endDate: '7-04-2022',
        price: '10',
    },
    {
        id: 2,
        status: 'Old',
        restaurant: 'Healthy Diet',
        plan: 'Diet',
        period: '30',
        startDate: '3-02-2023',
        endDate: '3-06-2023',
        price: '70',
    },
    {
        id: 3,
        status: 'active',
        restaurant: 'Good Diet',
        plan: 'Keto',
        period: '65',
        startDate: '24-8-2023',
        endDate: '2-9-2023',
        price: '30',
    },
];

const Table = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const { t, i18n } = useTranslation();
    return (
        <StyledTable>
            {isSmallScreen ? (
                <>
                    <TableOne>
                        <TableHead>
                            <StyledTableRow>
                                <TableCell align="center">Status</TableCell>
                                <TableCell align="center">Restaurant</TableCell>
                                <TableCell align="center">Plan</TableCell>
                                <TableCell align="center"></TableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <Row key={row.id} row={row} />
                            ))}
                        </TableBody>
                    </TableOne>
                </>
            ) : (
                <MainTable>
                    <TableHead>
                        <StyledTableRow>
                            <TableCell align="center">{t('PERSONAL_DETAILS.STATUS')}</TableCell>
                            <TableCell align="center">{t('PERSONAL_DETAILS.RESTAURANT')}</TableCell>
                            <TableCell align="center">{t('PERSONAL_DETAILS.PLAN')}</TableCell>
                            <TableCell align="center">{t('PERSONAL_DETAILS.PERIOD')}</TableCell>
                            <TableCell align="center">{t('PERSONAL_DETAILS.START_DATE')}</TableCell>
                            <TableCell align="center">{t('PERSONAL_DETAILS.END_DATE')}</TableCell>
                            <TableCell align="center">{t('PERSONAL_DETAILS.PRICE')}</TableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id} className={`${isSmallScreen ? '' : 'border_true'}`}>
                                <TableCell align="center">{row.status}</TableCell>
                                <TableCell align="center">{row.restaurant}</TableCell>
                                <TableCell align="center">{row.plan}</TableCell>
                                <TableCell align="center">{row.period}</TableCell>
                                <TableCell align="center">{row.startDate}</TableCell>
                                <TableCell align="center">{row.endDate}</TableCell>
                                <TableCell align="center">{row.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </MainTable>
            )}
        </StyledTable>
    );
};
const Row = (props: any) => {
    const [open, setOpen] = useState<boolean>();
    const { row } = props;
    return (
        <>
            <TableRow>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">{row.restaurant}</TableCell>
                <TableCell align="center">{row.plan}</TableCell>
                <TableCell className="toggle_icon" align="center" onClick={() => setOpen(!open)}>
                    {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell className={`no_padding ${open ? 'border_top' : ''}`} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box>
                            <SubHeading>{row.restaurant}</SubHeading>
                            <MuiTable size="small" aria-label="purchases" className={`mb-4 shadow `}>
                                <TableHead>
                                    <StyledTableRow className="small">
                                        <StyledCell align="center">Peroid</StyledCell>
                                        <StyledCell align="center">Start date</StyledCell>
                                        <StyledCell align="center">End date</StyledCell>
                                        <StyledCell align="center">Price</StyledCell>
                                    </StyledTableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <DetailsCell component="th" scope="row" align="center">
                                            {row.period}
                                        </DetailsCell>
                                        <DetailsCell component="th" scope="row" align="center">
                                            {row.startDate}
                                        </DetailsCell>
                                        <DetailsCell component="th" scope="row" align="center">
                                            {row.endDate}
                                        </DetailsCell>
                                        <DetailsCell component="th" scope="row" align="center">
                                            {row.price}
                                        </DetailsCell>
                                    </TableRow>
                                </TableBody>
                            </MuiTable>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
};

export default Table;
