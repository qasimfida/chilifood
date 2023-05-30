import { Box, CardActionArea, CardContent, Typography } from '@mui/material';
import { css, styled } from '@mui/system';
import { Link } from 'react-router-dom';
interface StyledCardProps {
    dir?: string;
}
export const Label = styled(Typography)`
    font-size: 14px;
    margin-bottom: 0px;
    text-align: center;
    ${({ theme: { palette } }: any) => {
        return css`
            color: ${palette.secondary.main};
        `;
    }};
`;
export const Row = styled(Box)`
    display: flex;
    justify-content: center;
    &:last-child {
        width: 100%;
        min-width: 100%;
    }
`;
export const Title = styled(Typography)`
    font-weight: 600;
    position: relative;
    font-size: 16px;
    margin-bottom: 0px;
    ${({ theme: { palette } }: any) => {
        return css`
            color: ${palette.primary.main};
        `;
    }};
    width: 100%;
`;
export const Body = styled(CardActionArea)`
    overflow: hidden;
    display: flex;
    flex-direction: row;
`;
export const Content = styled(CardContent)`
    width: 100%;
    box-sizing: border-box;
    transition: 0.1s all ease-in;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    padding: 12px 0;
    justify-content: center;
    svg {
        height: 20px;
    }
`;
export const StyledCard = styled(Link)<StyledCardProps>`
    ${(props) => {
        const { dir } = props;
        return css`
            box-sizing: border-box;
            box-shadow: 0px 4px 7px 2px rgba(0, 0, 0, 0.2);
            max-width: 100%;
            max-width: 360px;
            transition: 0.2s all ease;
            position: relative;
            height: 100%;
            display: block;
            margin: 12px auto 0;
            text-decoration: none;
            border: 2px solid #579b3f;
            padding: 12px 12px 0;
            border-radius: 12px;
            button {
                flex-direction: column;
                height: 100%;
                align-items: flex-start;
                justify-content: flex-start;
                bottom: 0;
                &:hover .MuiCardActionArea-focusHighlight.css-1v2exvi-MuiCardActionArea-focusHighlight {
                    display: none;
                }
            }
            svg {
                transform: rotate(${dir === 'rtl' ? '180deg' : '0'});
            }
            .mr-3 {
                margin: ${dir === 'rtl' ? '0 12px 0 0' : '0 0 0 12px'};
            }
            .mr-2 {
                margin: ${dir === 'rtl' ? '0 6px 0 0' : '0 0 0 6px'};
            }
        `;
    }}
`;
export const Button = styled(Typography)<{ component: string }>`
    position: relative;
    ${({ theme: { palette } }) => {
        return css`
            background: ${palette.primary.main};
            color: #fff;
            border: 2px solid ${palette.primary.main};
        `;
    }};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 8px;
    text-align: center;
    padding: 8px;
    display: block;
    margin: 0;
`;
