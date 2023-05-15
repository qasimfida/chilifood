import { Button, Grid, Table, TableCell, TableContainer, TableRow, styled } from '@mui/material';

export const StyledTable = styled(TableContainer)`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    .shadow {
        box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 8px;
    }
    width: 100%;
    td {
        padding: 10px;
    }
    th {
        border: 1px solid #dcdcdc;
    }
    tbody {
        tr {
            td {
                border-top: unset;
                border-left: 1px solid #dcdcdc !important;
                border-right: 1px solid #dcdcdc !important;
            }
        }
    }

    .no_padding {
        padding-top: 0px;
        padding-bottom: 0px;
    }
    .small .MuiTableCell-root.MuiTableCell-head {
        padding: 4px 8px;
    }
    .mb-4 {
        margin-bottom: 16px;
    }
    .border_top {
        border-top: 1px solid #dcdcdc;
        padding: 0 14px;
    }
    .border_true {
        border-top: 1px solid #dcdcdc;
    }
    .toggle_icon {
        cursor: pointer;
        color: #7e7e7ede;
    }
`;
export const MainTable = styled(Table)`
    width: 100%;
`;
export const TableOne = styled(Table)`
    width: 100%;
    transition: 4s ease all;
`;
export const TableTwo = styled(Table)``;
export const TableIconWrapper = styled(TableRow)`
    width: 100%;
    display: flex;
    justify-content: end;
    transition: 4s ease all;
`;
export const StyledButton = styled(Button)`
    background: none;
    border: none;
    outline: none;
`;
export const StyledTableRow = styled(TableRow)`
    background: #e9f1e7;
    th {
        padding: 10px;
    }
    td {
        border: 1px solid grey;
    }
`;
export const SubHeading = styled('h6')`
    text-align: initial;
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    margin: 10px 0;
`;
export const StyledCell = styled(TableCell)`
    font-size: 12px;
    font-weight: 500;
`;
export const DetailsCell = styled(TableCell)`
    font-size: 12px;
    font-weight: 400;
`;

export const StyledGrid = styled(Grid)``;
