import { styled } from '@mui/system';
import { Box, Button, Dialog, DialogActions, DialogContent, css } from '@mui/material';

export const Wrapper = styled(Box)`
    text-align: center;
    table th:first-of-type,
    table td:first-of-type {
        text-align: ${({ dir }) => (dir === 'rtl' ? 'left' : 'right')};
    }
    table th:last-child,
    table td:last-child {
        text-align: ${({ dir }) => (dir === 'rtl' ? 'right' : 'left')};
    }
`;
export const StyledDialogs = styled(Dialog)`
    .css-78mkp9-MuiPaper-root-MuiDialog-paper {
        max-width: 400px;
    }
`;

export const StyledActions = styled(DialogActions)<any>`
    padding-bottom: 16px;
    gap: 16px;
    ${({ dir }) => css`
        flex-direction: ${dir === 'rtl' ? 'row-reverse' : ''};
    `}
`;

export const DialogButton = styled(Button)`
    color: #000;
    padding-left: 20px;
    padding-right: 20px;
    margin-right: 16px;
`;
export const Content = styled(DialogContent)`
    .MuiOutlinedInput-notchedOutline legend {
        opacity: 0 !important;
        display: none !important;
    }
    .MuiInputLabel-root {
        right: 24px;
        width: fit-content;
        background: #f5f5f5;
        padding: 2px;
        margin-top: -4px;
    }
    .MuiFormHelperText-root:not(.Mui-error) {
        display: none;
    }
    .MuiTextField-root {
        margin-top: 20px;
    }
    .MuiFormControlLabel-root {
        margin-right: 0;
        .MuiCheckbox-root {
            padding-right: 0px;
        }
    }
`;
