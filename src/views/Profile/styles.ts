import { Box, Grid, Tab, css, styled } from '@mui/material';
import { AppButton } from '../../components';
import { TabList } from '@mui/lab';

const Wrapper = styled(Box)`
    margin-top: 3rem;
    width: 100%;
    .MuiTabPanel-root {
        padding: 32px 0;
    }
    .MuiTableCell-root.MuiTableCell-body.css-16gnyic-MuiTableCell-root {
        border: none;
    }
    .MuiInputLabel-root {
        width: fit-content;
        background: #fbfbfb;
        padding: 2px;
        margin-top: -4px;
    }
`;

export const StyledComp = styled(Box)`
    .custom-styles {
        margin-top: 0;
    }
`;

export const Header = styled(Box)`
    padding-top: 40px;
    padding-bottom: 0px;
    text-align: center;
`;

export const StyledGrid = styled(Grid)`
    justify-content: start;
`;
export const Submit = styled(AppButton)<any>`
    padding: 12px 20px;
    margin: 32px 0 0 0;
`;
export const StyledTitle = styled(Tab)<any>`
    font-size: 17px;
    
    ${({ theme: { breakpoints } }) => css`
        @media (max-width: ${breakpoints.values.sm}px) {
            font-size: 14px;
        }
    `}}
`;
export const Tabs = styled(TabList)<any>`
${({ dir }) => {
    return css`
        .MuiTabs-flexContainer {
            justify-content: start;
        }
    `;
}}}
`;

export default Wrapper;
