import { css, styled } from '@mui/system';
import { Box, Tab, Tabs } from '@mui/material';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { Lock } from '@mui/icons-material';

interface StyledTypoGraphy extends TypographyProps {
    component?: string;
    locked?: boolean;
}
export const Wrapper = styled(Tab)`
    ${({ theme: { palette } }) => css`
        display: flex;
        justify-content: start;
        height: 72px;
        width: 64px;
        box-sizing: border-box;
        min-width: 50px;
        padding: 4px 6px 0;
        border-radius: 8px;
        cursor: pointer;
        background: #fff;
        color: ${palette.primary.main};
        transition: 0.3s all ease;
        opacity: 1;
        border: 1px solid #dfdfdf;
        &.Mui-selected {
            background: ${palette.primary.main};
            color: #fff;
            .month {
                color: #fff;
            }
        }
        &.active {
            background: ${palette.primary.main};
            color: #fff;
            .month {
                color: #fff;
            }
        }
        &.disabled {
            background: #e3e3e3;
            color: #000;
            cursor: not-allowed;
            .month {
                color: #000;
            }
        }
        &.locked {
            background: #4d4d4d;
            color: #fff;
            .month {
                color: #fff;
            }
        }
        &:not(.disabled):not(.locked).focus {
            background: ${palette.primary.main};
            color: #fff;
            .month {
                color: #000;
            }
        }
        &:not(.disabled):not(.locked):hover {
            background: ${palette.primary.main};
            color: #fff;
            .month {
                color: #fff;
            }
        }
        .month {
            color: #000;
        }
    `}
`;
export const StyledWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
export const StyledDay = styled(Typography)<StyledTypoGraphy>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 22px;
    font-weight: 700;
    line-height: 20px;
    position: relative;
    margin-top: 8px;
`;

export const Badge = styled(Typography)`
    padding: 2px;
    font-size: 10px;
    font-weight: 400;
    line-height: 16px;
    border-radius: 5px;
    background: #bf1515;
    color: #fff;
`;
export const Date = styled(Typography)<StyledTypoGraphy>`
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
`;
export const LockIcon = styled(Lock)`
    height: 16px;
    width: 16px;
    color: #fff;
`;
export const Header = styled(Box)`
    height: 18px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;
export const Month = styled(Typography)<StyledTypoGraphy>`
    font-weight: 500;
    font-size: 10px;
    color: #fff;
`;
export const BorderedBox = styled(Box)`
    border-bottom: 1px solid #dfdfdf;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
`;
export const DatesWrapper = styled(Tabs)<any>`
    display: flex;
    position: relative;
    align-items: center;
    width: 100%;
    padding-top: 0px;
    padding-bottom: 20px;
    min-height: 68px;
    overflow: hidden;
    max-width: 480px;
    flex-direction: ${({ theme: { dir } }) => (dir === 'ltr' ? 'row' : 'row')};
    .MuiTabs-flexContainer {
        gap: 12px;
        align-items: flex-start;
    }
    .MuiTabs-indicator {
        display: none;
    }
    .MuiTabs-scrollButtons {
        width: unset;
        opacity: 1;
        transform: rotate(${({ theme: { dir } }) => (dir === 'ltr' ? '180deg' : '0deg')});
    }
`;
