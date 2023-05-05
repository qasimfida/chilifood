import { Drawer, css, styled } from '@mui/material';

export const StyledDrawer = styled(Drawer)`
    ${({ dir }) => css`
        .MuiDrawer-paper {
            left: ${dir === 'rtl' ? 0 : 'unset'};
            right: ${dir === 'rtl' ? 'unset' : '0'};
        }
    `}
`;
