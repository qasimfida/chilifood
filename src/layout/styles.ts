import { Box, Button, FormControl, Stack, Tab, Typography, css, styled } from '@mui/material';

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
`;
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
    height: 68px;
    min-height: 68px;
    max-width: 100%;
    z-index: 1;
    ${({ theme: { palette } }: any) => css`
        border-top: 1px solid ${palette.secondary.light};
        background: ${palette.primary.light};
        & label {
            background: ${palette.primary.light};
            color: ${palette.primary.main};

            &.Mui-focused {
                color: ${palette.primary.main};
            }
        }
    `}
    .MuiOutlinedInput-notchedOutline legend {
        opacity: 0 !important;
        display: none !important;
    }
    .MuiInputLabel-root {
        right: 12px;
        width: fit-content;
        background: ${({ theme: { palette } }) => palette.primary.light};
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
    width: 150px;
    min-width: 120;
    fieldset {
        border: 1px solid ${({ theme: { palette } }: any) => palette.primary.main};
    }
`;

export const StyledButton = styled(Button)`
    ${({ theme: { palette } }: any) => css`
        background: ${palette.primary.light};
        color: #000;
        padding: 0px 20px;
        border: 1px solid ${palette.primary.main};
        height: 40px;
        &:hover {
            background: ${palette.primary.main};
            color: #fff;
        }
    `}
`;
export const Flex = styled(Box)`
    display: flex;
    justify-content: space-between;
`;
