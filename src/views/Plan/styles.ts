import { css, styled } from '@mui/system';
import { TabContext } from '@mui/lab';
import { Box, Button, FormControl, Tab, Typography } from '@mui/material';

export const Wrapper = styled(Box)`
    ${({ theme: { palette } }: any) => css`
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: no-wrap;
        box-sizing: border-box;
        padding: 20px 0;
        background: ${palette.secondary.light};
        width: 100%;
        min-height: calc(100vh - 52px);
        height: auto;
        margin: 0 auto;
        .px-0 {
            padding-left: 0;
            padding-right: 0;
        }
    `})
`;
export const StyledTabContext = styled(TabContext)`
    border: none;
`;
export const TabsWrapper = styled(Box)`
    width: 100%;
    max-width: 100%;
    height: calc(100% - 52px);
`;

export const TabListContainer = styled(Box)`
    display: flex;
    justify-content: center;
`;
export const PriceWrapper = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    bottom: 0;
    width: 100%;
    height: 68px;
    max-width: 100%;
    ${({ theme: { palette } }: any) => css`
        border-top: 1px solid ${palette.gray.light};
        background: ${palette.secondary.light};
        & label {
            background: #fff;
            color: ${palette.primary.main};

            &.Mui-focused {
                color: ${palette.primary.main};
            }
        }
    `}
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
        background: #fff;
        color: ${palette.primary.main};
        padding: 0px 20px;
        border: 1px solid ${palette.primary.main};
        height: 40px;
        &:hover {
            background: ${palette.primary.main};
            color: #fff;
        }
    `}
`;

export const PlanTitle = styled(Typography)`
    ${({ theme: { palette } }: any) => css`
        font-size: 14px;
        font-weight: 400;
        color: ${palette.secondary.main};
        border-bottom: 1px solid #dfdfdf;
        padding: 10px 0;
    `}
`;
export const Month = styled(Typography)`
    ${({ theme: { palette } }: any) => css`
        font-size: 18px;
        font-weight: 600;
        color: ${palette.secondary.dark};
        padding: 10px 0;
    `}
`;
export const Description = styled(Box)`
    text-align: center;
    border-bottom: 1px solid #dfdfdf;
    padding-bottom: 12px;
    margin: 20px auto;
    width: max-content;
`;
