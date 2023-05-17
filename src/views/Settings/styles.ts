import { styled } from '@mui/system';
import { Box, Button, Dialog, DialogActions, css, TextField } from '@mui/material';
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
export const StyledDialogs = styled(Dialog)`
    .css-78mkp9-MuiPaper-root-MuiDialog-paper {
        max-width: 400px;
    }
`;

export const StyledActions = styled(DialogActions)`
    padding-bottom: 16px;
    gap: 16px;
`;
export const DialogButton = styled(Button)`
    color: #000;
    padding-left: 20px;
    padding-right: 20px;
    margin-right: 16px;
`;
export const StyledDialog = styled(Dialog)`
    .css-78mkp9-MuiPaper-root-MuiDialog-paper {
        min-width: 300px;
    }
`;
