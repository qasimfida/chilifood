import { css, styled } from '@mui/system';
import { Alert, AlertTitle, Box, Typography } from '@mui/material';

export const Wrapper = styled(Box)`
    margin-top: 40px;
`;
export const Title = styled(Typography)`
    ${({ theme: { palette } }: any) => css`
        color: ${palette.secondary.main};
        margin-bottom: 0px;
        font-weight: 700;
        font-size: 30px;
        letter-spacing: 0.8px;
    `}
`;
export const Heading = styled(Typography)`
    ${({ theme: { palette } }: any) => css`
        color: ${palette.secondary.main};
        margin-bottom: 0px;
        font-weight: 600;
        font-size: 24px;
        letter-spacing: 0.8px;
    `}
`;

export const Description = styled(Typography)`
    ${({ theme: { palette } }: any) => css`
        color: ${palette.secondary.main};
        margin-bottom: 40px;
        font-size: 14px;
    `}
`;
export const ListContent = styled(Box)(({ theme: { palette } }) => ({
    display: 'flex',
    marginTop: '20px',
    alignItems: 'center',
    svg: {
        color: palette.primary.dark,
        marginLeft: '10px',
        width: '13px',
        height: '13px',
    },
}));
export const StyledAlert = styled(Alert)(({ theme: { palette } }) => ({
    margin: '14px 0',
    width: '100%',
    padding: '6px',
    fontSize: '13px',
    '.MuiAlert-icon ': {
        margin: '0',
        marginLeft: '10px',
    },
}));
export const StyledAlertTitle = styled(AlertTitle)(({ theme: { palette } }) => ({
    fontSize: '16px',
    fontWeight: '700',
    letterSpacing: '.6px',
    color: palette.secondary.main,
}));
export const SubHeading = styled(Typography)`
    ${({ theme: { palette } }: any) => css`
        color: ${palette.secondary.main};
        margin-bottom: 0px;
        font-weight: 600;
        font-size: 20px;
        letter-spacing: 0.8px;
    `}
`;
