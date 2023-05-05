import { css, styled } from '@mui/system';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
export const Header = styled(AppBar)<any>`
    background: ${({ theme: { palette } }) => palette.primary.light};
    display: flex;
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.2);
`;
export const StyledToolbar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
`;
export const Navigation = styled(Box)`
    display: flex;
    align-items: center;
    ${({ theme: { palette }, dir }: any) => {
        return css`
            color: ${palette.secondary.main};
            .pointer {
                transform: rotate(${dir === 'rtl' ? '180deg' : '0deg'});
                cursor: pointer;
            }
        `;
    }}
`;
export const Title = styled(Typography)`
    font-weight: 700;
    font-size: 18px;
`;
export const Logo = styled('img')`
    height: 44px;
    width: 44px;
    border-radius: 50%;
`;
