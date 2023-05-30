import { Box, styled } from '@mui/material';
import { AppButton } from '../../components';

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

export const Submit = styled(AppButton)<any>`
    padding: 12px 20px;
    margin: 32px 0 0 0;
`;

export default Wrapper;
