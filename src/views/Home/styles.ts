import { css, styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

export const Wrapper = styled(Box)`
    margin-top: 20px;
    min-height: calc(100vh - 188px);
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
        margin-bottom: 40px;
        text-align: center;
    `}
`;
