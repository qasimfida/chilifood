import { Drawer, css, styled, ListItemButton, List, Stack } from '@mui/material';

export const StyledDrawer = styled(Drawer)`
    ${({ dir }) => css`
        .MuiDrawer-paper {
            // left: ${dir === 'rtl' ? 0 : 'unset'};
            // right: ${dir === 'rtl' ? 'unset' : '0'};
        }
    `}
`;
export const StyledItem = styled(ListItemButton)<any>`
    ${({ dir }) => css`
        .MuiTypography-root {
            text-align: ${dir === 'rtl' ? 'right' : 'left'};
        }
        .MuiListItemIcon-root {
            min-width: auto;
        }
    `}
`;
export const StyledList = styled(List)<any>``;
export const Settings = styled(Stack)<any>`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin-top: 2;
    border-top: 1px solid rgba(0, 0, 0, 0.24);
`;
