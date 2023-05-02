import { Box, CardActionArea, CardContent, CardMedia, Typography, TypographyProps } from '@mui/material';
import { css, styled } from '@mui/system';
interface StyledCardProps {
    expended?: string;
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
    @media (max-width: 480px) {
        height: 160px;
    }
`;

export const CardTitle = styled(Typography)`
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 0px;
    overflow: hidden;
    color: ${({ theme: { palette } }) => palette.grey.main};
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;
export const Body = styled(CardActionArea)`
    overflow: hidden;
    display: flex;
`;
export const Description = styled(Typography)`
    font-weight: 400;
    font-size: 14px;
    overflow: hidden;
    color: ${({ theme: { palette } }) => palette.grey.main};
`;
export const Macros = styled(Box)`
    display: flex;
    width: 100%;
    overflow: hidden;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px 0;
    box-sizing: border-box;
    transition: 0.3s all ease-in;
`;
export const Details = styled(Box)<StyledCardProps>`
    height: 200px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    position: absolute;
    transition: 0.3s all ease-in;
    background: rgba(255, 255, 255, 0.88);
    border-radius: 4px;
    @media (max-width: 991px) {
        height: 160px;
        padding: 12px;
    }
    ${({ theme: { palette }, expended }: any) => {
        const open = expended === 'true';
        return css`
            top: ${open ? '0' : '-200px'};
        `;
    }};
    hr {
        width: 0;
        height: 20px;
        margin: 0 auto;
    }
`;
export const Content = styled(CardContent)`
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
`;
export const Col = styled(Box)`
    width: 64px;
    gap: 8px 0;
    display: flex;
    flex-direction: column;
`;
export const Toggle = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 18px;
    width: 18px;
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 300;
    border-radius: 50%;
    svg {
        height: 32px;
        width: 32px;
    }
    &:hover {
        background: light-grey;
    }
`;
export const Macro = styled(Typography)`
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    width: 45%;
    color: ${({ theme: { palette } }) => palette.grey.main};
`;
export const MacrosCount = styled(Typography)<StyledTypoGraphy>`
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 48;
`;

export const StyledCard = styled(Box)<StyledCardProps>`
    ${(props) => {
        const {
            theme: { palette },
            expended,
        } = props;
        const open = expended === 'true';
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
            button {
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                &:hover .MuiCardActionArea-focusHighlight.css-1v2exvi-MuiCardActionArea-focusHighlight {
                    display: none;
                }
            }
            .icon {
                transition: 0.3s all ease;
                transform: rotate(${open ? '180deg' : '0deg'});
            }
        `;
    }}
`;
