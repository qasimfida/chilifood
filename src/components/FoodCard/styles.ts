import { Box, CardActionArea, CardContent, CardMedia, Radio, Typography, TypographyProps } from '@mui/material';
import { css, styled } from '@mui/system';
interface StyledCardProps {
    expended?: string;
}
interface StyledTypoGraphy extends TypographyProps {
    component?: string;
}

export const StyledMedia = styled(CardMedia)`
    height: 180px;
    width: 100%;
    min-width: 100%;
    border-radius: 4px;
    overflow: hidden;

    ${({
        theme: {
            breakpoints: { values },
        },
    }: any) => {
        return css`
            @media (max-width: ${values.sm}px) {
                height: 120px;
            }
        `;
    }};
`;

export const CardTitle = styled(Typography)`
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 0px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    ${({
        theme: {
            palette,
            breakpoints: { values },
        },
    }: any) => {
        return css`
            color: ${palette.grey.main};
            @media (max-width: ${values.sm}px) {
                font-size: 12px;
            }
        `;
    }};
`;
export const Body = styled(CardActionArea)`
    overflow: hidden;
    display: flex;
`;
export const Description = styled(Typography)<any>`
    font-weight: 300;
    font-size: 12px;
    overflow: hidden;
    color: ${({ theme: { palette } }) => palette.grey.main};
    ${({ theme: { palette }, expended }: any) => {
        const open = expended === 'true';
        return css`
            padding-top: ${open ? '8px' : '0'};
            height: ${open ? 'auto' : '0'};
        `;
    }};
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
    margin-top: 4px;
`;
export const Details = styled(Box)<StyledCardProps>`
    padding: 0 8px;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    ${({ theme: { palette }, expended }: any) => {
        return css`
            background: ${palette.secondary.dark};
            bottom: 0;
        `;
    }};
    hr {
        width: 0;
        height: 20px;
        margin: 0 auto;
    }
`;
export const Content = styled(CardContent)`
    margin: 8px 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
`;
export const Col = styled(Box)`
    width: 64px;
    gap: 8px 0;
    display: flex;
    flex-direction: column;
`;
export const RadioCheckBox = styled(Radio)<any>`
    z-index: 1;
    padding: 0;
    position: absolute;
    left: 10px;
    top: 10px;
    color: #fff;
    transform: scale(1.2);
    &.Mui-checked {
      color: #fff;
    },
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
    margin-right: 8px;
`;
export const Macro = styled(Typography)<any>`
    font-size: 12px;
    font-weight: 300;
    line-height: 1;
    width: 25%;
    color: ${({ theme: { palette } }) => palette.grey.main};
`;
export const MacrosCount = styled(Typography)<StyledTypoGraphy>`
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 48;
    display: block;
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
