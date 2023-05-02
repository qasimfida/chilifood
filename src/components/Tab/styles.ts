import { Box, Typography, css, styled } from '@mui/material';

export const Wrapper = styled(Box)`
    ${({ theme: { palette } }: any) => css`
        color: ${palette.secondary.main};
        &:hover {
            color: ${palette.primary.main};
        }
    `}
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const TabsText = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  text-transform: capitalize;
}

`;
