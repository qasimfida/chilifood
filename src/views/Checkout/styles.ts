import { styled } from '@mui/system';
import { Box, TextField } from '@mui/material';
import { AppButton } from '../../components';

export const Title = styled(Box)`
    text-align: center;
    border-bottom: 1px solid #dfdfdf;
    padding-bottom: 12px;
    margin: 20px auto;
    width: max-content;
`;
export const Wrapper = styled(Box)`
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
`;

export const TextArea = styled(TextField)`
    width: 100%;
`;
export const PayButton = styled(AppButton)`
    margin: 20px;
    margin-top: 40px;
    width: 160px;
    max-width: 100%;
`;
