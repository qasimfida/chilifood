import { Box, styled } from '@mui/material';
import { AppButton } from '../../components';

const Wrapper = styled(Box)`
    margin-top: 3rem;
    width: 100%;
    background: #fff;
    .MuiTabPanel-root {
        padding: 32px 0;
    }
    .MuiTableCell-root.MuiTableCell-body.css-16gnyic-MuiTableCell-root {
        border: none;
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

export const Submit = styled(AppButton)<any>`
    padding: 12px 20px;
    margin: 32px 0 0 0;
`;

export default Wrapper;
