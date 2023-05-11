import { Drawer, css, styled, ListItemButton } from '@mui/material';

export const StyledDrawer = styled(Drawer)`
    ${({ dir }) => css`
        .MuiDrawer-paper {
            left: ${dir === 'rtl' ? 0 : 'unset'};
            right: ${dir === 'rtl' ? 'unset' : '0'};
        }
    `}
`;
export const StyledItem = styled(ListItemButton)<any>`
    ${({ dir }) => css`
        .MuiTypography-root {
            text-align: ${dir === 'rtl' ? 'left' : 'right'};
        }
    `}
`;
