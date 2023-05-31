import { styled, css } from '@mui/system';
import { Box, Link, TableCell, TextField, Typography } from '@mui/material';
import { AppButton } from '../../components';
import { DatePicker } from '@mui/x-date-pickers';

export const Wrapper = styled(Box)`
    margin-top: 40px;
    text-align: center;
    table th:first-of-type,
    table td:first-of-type {
        text-align: left;
    }
    table th:last-child,
    table td:last-child {
        text-align: right;
    }
    .MuiFormControl-root {
        min-width: 144px;
        & label {
            background: #fbfbfb;
        }
        .MuiFormLabel-root.MuiInputLabel-formControl.MuiInputLabel-shrink.Mui-focused {
            right: 14px;
        }
        .MuiSelect-select {
            text-align: right;
        }
    }
    .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input {
        padding-left: 32px;
        padding-right: 12px !important;
    }
    .MuiSvgIcon-root.MuiSelect-icon {
        left: 8px;
        right: unset;
    }
    .css-fup316-MuiInputBase-root-MuiOutlinedInput-root {
        display: flex;
        align-items: center;
        padding: 8px 0;
        padding-right: 12px;
        width: 171px;
        height: 40px;
    }
    .m-0 {
        margin-top: 0;
    }
`;

export const TextArea = styled(TextField)`
    width: 100%;
`;

export const PayButton = styled(AppButton)`
    margin: 20px;
    margin-top: 40px;
    width: 320px;
    height: 48px;
    max-width: 100%;
    font-size: 20px;
`;
export const LastCell = styled(TableCell)<{ dir: 'rtl' | 'ltr' }>`
    ${({ dir }) => css`
        text-align: left !important;
    `};
`;
export const LinkText = styled(Typography)`
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    color: #579b3f;
    text-decoration: underline;
    text-decoration-color: rgba(87, 155, 63, 0.4);
`;
export const Cell = styled(TableCell)<any>`
    padding: 12px;
`;
export const Picker = styled(DatePicker)`
    .MuiInputBase-root.MuiInputBase-formControl {
        height: 44px !important;
    }
    input {
        padding: 8px 14px;
    }
`;
export const StyleLink = styled(Link)`
    max-width: 120px;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
`;
