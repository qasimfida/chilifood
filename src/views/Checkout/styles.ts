import { styled } from '@mui/system';
import { Box, TextField, Typography } from '@mui/material';
import { AppButton } from '../../components';

export const Wrapper = styled(Box)`
    margin-top: 40px;
    text-align: center;
    table th:first-child,
    table td:first-child {
        text-align: ${({ dir }) => (dir === 'rtl' ? 'left' : 'right')};
    }
    table th:last-child,
    table td:last-child {
        text-align: ${({ dir }) => (dir === 'rtl' ? 'right' : 'left')};
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
export const Typo = styled(Typography)`
    text-align: right;
`;
