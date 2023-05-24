import { Box, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { css, styled } from '@mui/system';
import { Link } from 'react-router-dom';
interface StyledCardProps {
    dir?: string;
}
export const StyledMedia = styled(CardMedia)`
    height: 100%;
    width: 100%;
    min-width: 100%;
    border-radius: 4px;
    overflow: hidden;
    position: absolute;
`;
export const Label = styled(Typography)`
    font-size: 14px;
    margin-bottom: 0px;
    overflow: hidden;
    ${({ theme: { palette } }: any) => {
        return css`
            color: ${palette.secondary.main};
        `;
    }};
`;
export const Row = styled(Box)`
    display: flex;
    margin-bottom: 4px;
    p:nth-of-type(1) {
        min-width: 72px;
    }
`;
export const Title = styled(Typography)`
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 0px;
    ${({ theme: { palette } }: any) => {
        return css`
            color: ${palette.primary.main};
        `;
    }};
    border-left: 1px solid #999;
    width: 144px;
    height: 100%;
    padding: 12px;
`;
export const Body = styled(CardActionArea)`
    overflow: hidden;
    display: flex;
    flex-direction: row;
    gap: 20px;
`;
export const Content = styled(CardContent)`
    padding: 12px;
    width: 100%;
    box-sizing: border-box;
    transition: 0.1s all ease-in;
    box-sizing: border-box;
    overflow: hidden;
    svg {
        height: 20px;
    }
`;
export const StyledCard = styled(Link)<StyledCardProps>`
    ${(props) => {
        const {
            dir,
            theme: { palette },
        } = props;
        return css`
            box-sizing: border-box;
            box-shadow: 0px 0px 10px 2px #fff;
            padding: 0;
            max-width: 100%;
            border-radius: 4px;
            transition: 0.2s all ease;
            position: relative;
            height: 100%;
            display: block;
            text-decoration: none;
            button {
                height: 100%;
                align-items: flex-start;
                justify-content: flex-start;
                background: ${palette.primary.light};
                bottom: 0;
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
