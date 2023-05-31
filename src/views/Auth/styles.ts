import { Box, Button, Grid, Typography, styled } from '@mui/material';
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
    background: #fff;
    border-radius: 12px;
    box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.1);
    padding: 40px 20px;
`;
export const Submit = styled(AppButton)<any>`
    padding: 12px 20px;
    margin: 20px 0;
`;
export const StyledGrid = styled(Grid)<any>``;
export const Link = styled(Button)<any>`
    font-weight: 400;
    text-transform: capitalize;
`;
export const Description = styled(Typography)<any>`
    font-weight: 400;
`;
