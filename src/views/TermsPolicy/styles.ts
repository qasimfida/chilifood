import { Box, Typography } from '@mui/material';
import { styled } from '@mui/styles';

export const Wrapper = styled(Box)({
    marginTop: '50px',
    maxHeight: '490px',
    overflow: 'scroll',
    position: 'relative',
    paddingRight: '16px',
    paddingBottom: '24px',
    scrollbarWidth: 'thin',
    scrollbarColor: '#3f51b5 #F5F5F5',
    '&::-webkit-scrollbar': {
        width: '8px',
        backgroundColor: '#F5F5F5',
        height: '100%',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#579b3f',
        borderRadius: '4px',
    },
});
export const Title = styled(Typography)({
    fontWeight: '700',
    fontSize: '30px',
    letterSpacing: '0.8px',
    color: '#579b3f',
});

export const TabHeading = styled('h4')({
    margin: '0',
    fontWeight: '700',
    fontSize: '20px',
    color: '#579b3f',
});
