import { styled } from '@mui/system';
import { Box } from '@mui/material';
export const Wrapper = styled(Box)`
    position: relative;
    margin-top: 20px;
    margin-bottom: 40px;
    .MuiOutlinedInput-notchedOutline legend {
        opacity: 0 !important;
        display: none !important;
    }
    .MuiInputLabel-root {
        right: 12px;
        width: fit-content;
        background: ${({ theme: { palette } }) => palette.secondary.dark};
        padding: 2px;
        margin-top: -4px;
    }
    .MuiFormHelperText-root:not(.Mui-error) {
        display: none;
    }
    .MuiTextField-root {
        margin-top: 20px;
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
