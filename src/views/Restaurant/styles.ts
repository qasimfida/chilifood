import { css, styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

export const Wrapper = styled(Box)`
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
export const Title = styled(Typography)`
    ${({ theme: { palette } }: any) => css`
        color: ${palette.secondary.main};
        margin-bottom: 0px;
        text-align: center;
    `}
`;
export const Description = styled(Typography)`
    ${({ theme: { palette } }: any) => css`
        color: ${palette.secondary.main};
        border-bottom: 1px solid #dfdfdf;
        padding: 0 10px 10px;
        margin-bottom: 30px;
        text-align: center;
    `}
`;
