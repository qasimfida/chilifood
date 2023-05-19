import { css, styled } from '@mui/system';
import { Box, Tab, Tabs } from '@mui/material';
export const StyledTabContext = styled(Tabs)<any>`
    border: none;
    .MuiButtonBase-root.MuiTabs-scrollButtons {
        width: 24px;
    }
`;
export const TabsWrapper = styled(Box)`
    width: 100%;
    max-width: 100%;
    height: calc(100% - 52px);
`;
export const StyledTab = styled(Tab)`
    ${({ theme: { palette } }: any) => css`
        color: ${palette.secondary.dark};
        &.Mui-selected {
            border-radius: 5px;
            font-weight: bold;
            .MuiBox-root {
                color: ${palette.primary.main};
            }
        }
        &:hover .MuiBox-root {
            color: ${palette.primary.main};
        }
    `}
`;
export const Description = styled(Box)`
    text-align: center;
    border-bottom: 1px solid #dfdfdf;
    padding-bottom: 12px;
    margin: 20px auto;
    width: max-content;
`;
