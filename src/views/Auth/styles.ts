import { Box, Button, Typography, css, styled } from '@mui/material';
import { AppButton, AppIcon } from '../../components';

export const Wrapper = styled(Box)`
    margin-top: 40px;
    min-height: calc(100vh - 216px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 30rem;
    @media (max-width: 480px) {
        min-width: 100%;
    }
    width: 100%;
    .MuiOutlinedInput-notchedOutline legend {
        opacity: 0 !important;
        display: none !important;
    }
    .MuiInputLabel-root {
        right: 24px;
        width: fit-content;
        background: #fff;
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
    .MuiAutocomplete-inputRoot {
        .MuiAutocomplete-endAdornment {
            display: flex;
            justify-content: flex-end;
            left: 8px;
        }
    }
    .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon .MuiOutlinedInput-root {
        padding-left: 60px;
        padding-right: 8px !important;
    }
    .MuiAutocomplete-hasPopupIcon .MuiOutlinedInput-root {
        padding-left: 44px;
        padding-right: 8px !important;
    }
`;
export const Title = styled(Typography)<any>`
    font-weight: 500;
`;
export const Logo = styled('img')`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 52px;
    width: 52px;
`;
export const Icon = styled(AppIcon)`
    height: 36px;
    width: 36px;
`;
export const Header = styled(Box)`
    padding-top: 40px;
    padding-bottom: 0px;
    text-align: center;
`;
export const StyledComp = styled(Box)`
    ${({ theme: { palette } }) => css`
        background: #fff;
        border-radius: 12px;
        box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.1);
        padding: 40px 20px;
    `}
`;
export const Submit = styled(AppButton)<any>`
    padding: 12px 20px;
    margin: 20px 0;
`;
export const Link = styled(Button)<any>`
    font-weight: 400;
    text-transform: capitalize;
`;
export const Description = styled(Typography)<any>`
    font-weight: 400;
`;
