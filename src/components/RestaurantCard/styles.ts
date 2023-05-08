import { Box, CardActionArea, CardContent, CardMedia, Radio, Typography, TypographyProps } from '@mui/material';
import { css, styled } from '@mui/system';
import { Link } from 'react-router-dom';
interface StyledCardProps {
    dir?: string;
}
interface StyledTypoGraphy extends TypographyProps {
    component?: string;
}

export const StyledMedia = styled(CardMedia)`
    height: 200px;
    width: 100%;
    min-width: 100%;
    border-radius: 4px;
    overflow: hidden;
    @media (max-width: 991px) {
        height: 160px;
    }
`;

export const CardTitle = styled(Typography)`
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 0px;
    overflow: hidden;
    color: #000;
`;
export const Body = styled(CardActionArea)`
    overflow: hidden;
    display: flex;
`;
export const Content = styled(CardContent)`
    padding: 8px;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    position: absolute;
    transition: 0.1s all ease-in;
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    ${({ theme: { palette } }: any) => {
        return css`
            background: ${palette.primary.light};
            bottom: 0;
        `;
    }};
    svg {
        height: 20px;
    }
`;
export const StyledCard = styled(Link)<StyledCardProps>`
    ${(props) => {
        const {
            theme: { palette },
            dir,
        } = props;
        return css`
            box-sizing: border-box;
            box-shadow: 0px 0px 10px 2px #fff;
            padding: 0;
            max-width: 100%;
            background: ${palette.secondary.dark};
            border-radius: 4px;
            transition: 0.2s all ease;
            position: relative;
            color: #000;
            button {
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                &:hover .MuiCardActionArea-focusHighlight.css-1v2exvi-MuiCardActionArea-focusHighlight {
                    display: none;
                }
            }
            svg {
                transform: rotate(${dir === 'rtl' ? '180deg' : '0'});
            }
        `;
    }}
`;
