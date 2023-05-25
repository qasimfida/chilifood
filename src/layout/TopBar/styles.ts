import { styled, css } from '@mui/system';
import { AppBar, Toolbar } from '@mui/material';
export const Header = styled(AppBar)<any>`
    background: ${({ theme: { palette } }) => palette.primary.light};
    display: flex;
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.2);
`;
export const StyledToolbar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    ${({ dir }) => css`
        flex-direction: ${dir === 'rtl' ? 'row' : ' row'};
    `}
`;

export const Logo = styled('img')`
    height: 44px;
    width: 44px;
    border-radius: 50%;
`;
