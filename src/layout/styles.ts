import { Box, Button, Dialog, DialogActions, FormControl, Stack, Tab, Typography, css, styled } from '@mui/material';

export const Navigation = styled(Box)`
    display: flex;
    align-items: center;
    gap: 8px;
    ${({ theme: { palette }, dir }: any) => {
        return css`
            color: ${palette.secondary.main};
            .pointer {
                transform: rotate(${dir === 'rtl' ? '180deg' : '0deg'});
                cursor: pointer;
            }
        `;
    }}
`;

export const Title = styled(Typography)`
    font-weight: 700;
    font-size: 18px;
`;
export const Main = styled(Stack)<any>`
    min-height: calc(100vh - 64px);
    height: auto;
    position: relative;
    .MuiFormHelperText-root:not(.Mui-error) {
        display: none;
    }
    .MuiTextField-root {
        margin-top: 20px;
    }
`;
export const PageWrapper = styled(Stack)<any>``;
export const Content = styled(Box)<any>`
    min-height: calc(100vh - 64px);
    height: auto;
`;

export const PriceWrapper = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    bottom: 0;
    width: 100%;
    height: 88px;
    min-height: 88px;
    max-width: 100%;
    z-index: 1;
    ${({ theme: { palette } }: any) => css`
        border-top: 1px solid ${palette.secondary.light};
        background: #f3f3f3;
        & label {
            background: ${palette.primary.light};
            color: ${palette.primary.main};

            &.Mui-focused {
                color: ${palette.primary.main};
            }
        }
    `}// .MuiOutlinedInput-notchedOutline legend {
    //     opacity: 0 !important;
    //     display: none !important;
    // }
    // .MuiInputLabel-root {
    //     right: 12px;
    //     width: fit-content;
    //     background: #f3f3f3;
    //     padding: 2px;
    //     margin-top: -4px;
    // }
    // .MuiFormHelperText-root:not(.Mui-error) {
    //     display: none;
    // }
    // .MuiTextField-root {
    //     margin-top: 20px;
    // }
    // .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input {
    //     padding-left: 32px;
    //     padding-right: 12px !important;
    // }
    // .MuiSvgIcon-root.MuiSelect-icon {
    //     left: 8px;
    //     right: unset;
    // }
`;
export const StyledTab = styled(Tab)`
    ${({ theme: { palette } }: any) => css`
        color: ${palette.secondary.dark};
        &.Mui-selected {
            border-radius: 5px;
            font-weight: bold;
            color: ${palette.primary.main};
        }
    `}
`;
export const StyledFormControl = styled(FormControl)`
    width: 180px;
    min-width: 120;
    fieldset {
        border: 1px solid ${({ theme: { palette } }: any) => palette.primary.main};
    }
`;

export const StyledButton = styled(Button)`
    ${({ theme: { palette } }: any) => css`
        padding-left: 32px;
        padding-right: 32px;
        height: 52px;
    `}
`;
export const Flex = styled(Box)`
    display: flex;
    justify-content: space-between;
    flex-direction: ${({ dir }: any) => (dir === 'rtl' ? 'row-reverse' : 'row')};
`;
export const StyledActions = styled(DialogActions)`
    padding-bottom: 16px;
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
