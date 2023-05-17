import {
    Box,
    Button,
    CardActionArea,
    CardContent,
    CardMedia,
    FormControl,
    Typography,
    TypographyProps,
} from '@mui/material';
import { css, styled } from '@mui/system';
import { Link } from 'react-router-dom';
interface StyledCardProps {
    expended?: string;
}
interface StyledTypoGraphy extends TypographyProps {
    component?: string;
}

export const StyledMedia = styled(CardMedia)`
    height: 120px;
    width: 100%;
    min-width: 100%;
    border-radius: 4px;
    overflow: hidden;
`;

export const CardTitle = styled(Typography)`
    font-weight: 600;
    font-size: 16px;
    margin: 12px;
    overflow: hidden;
    color: ${({ theme: { palette } }) => palette.grey.main};
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;
export const Body = styled(Box)`
    overflow: hidden;
    display: flex;
    padding: 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;
export const Description = styled(Typography)<any>`
    font-weight: ${({ weight }) => weight || '300'};
    font-size: ${({ weight }) => (weight ? '16px' : '12px')}};
    overflow: hidden;
    margin-top: 0px;
    color: ${({ theme: { palette } }) => palette.grey.main};
`;
export const Details = styled(Box)<StyledCardProps>`
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    transition: 0.1s all ease-in;
    ${({ theme: { palette } }: any) => {
        return css`
            background: ${palette.secondary.dark};
        `;
    }};
`;
export const Content = styled(CardContent)`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    &:last-child {
        padding: 0;
    }
`;

export const FormSelect = styled(FormControl)`
    width: 170px;
    min-width: 170px;
    margin-top: 8px;
`;

export const StyledCard = styled(Box)<StyledCardProps>`
    ${(props) => {
        const {
            theme: { palette },
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
            &:hover {
                .title {
                    color: ${palette.primary.main};
                }
                .macros {
                    right: 0;
                }
            }
            .icon {
                transition: 0.3s all ease;
            }
        `;
    }}
`;
export const Subscribe = styled(Typography)`
    position: absolute;
    font-weight: 300;
    bottom: 12px;
    left: 12px;
    font-size: 12px;
    padding: 4px;
    border-radius: 4px;
    text-transform: capitalize;
    ${({ theme: { palette } }) => css`
        background: ${palette.primary.main};
        color: #fff;
    `};
`;
export const MediaWrapper = styled(Button)`
    position: relative;
    width: 100%;
    padding: 0;
    cursor: pointer;
`;
