import { css, styled } from '@mui/system';
import { Box, Tab, Tabs } from '@mui/material';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { Lock } from '@mui/icons-material';
import { TabPanel } from '@mui/lab';

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
        margin-top: 12px;
        box-sizing: border-box;
        min-width: 50px;
        padding: 6px 4px 0;
        border-radius: 8px;
        cursor: pointer;
        background: #fff;
        color: ${palette.primary.main};
        transition: 0.3s all ease;
        opacity: 1;
        border: 1px solid #dfdfdf;
        overflow: visible;
        &.disabled {
            background: #4d4d4d;
            color: #fff;
            cursor: not-allowed;
            .month,
            .date {
                color: #fff;
            }
        }
        &.locked {
            background: #e3e3e3;
            color: #444;
            .month,
            .date {
                color: #444;
            }
        }
        &.Mui-selected {
            background: ${palette.primary.main};
            color: #fff;
            .month,
            .date {
                color: #fff;
            }
        }
        &.active {
            background: ${palette.primary.main};
            color: #fff;
            .month,
            .date {
                color: #fff;
            }
        }
        &:not(.disabled).focus {
            background: ${palette.primary.main};
            color: #fff;
            .month,
            .date {
                color: #444;
            }
        }
        &:not(.disabled):hover {
            background: ${palette.primary.main};
            color: #fff;
            .month,
            .date {
                color: #fff;
            }
        }
        .month,
        .date {
            color: #444;
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
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    position: relative;
    margin-top: 4px;
`;

export const Badge = styled(Typography)<any>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 4px;
    font-size: 10px;
    font-weight: 400;
    line-height: 16px;
    ${({ variant, type, theme: { palette } }) => css`
        background: ${variant ? palette.secondary[variant] : '#bf1515'};
        border-radius: 12px;
        height: ${type === 'circle' ? '24px' : '20px'};
        height: ${type === 'off' ? '100px' : '20px'};
    `};
    color: #fff;
    position: absolute;
    left: -8px;
    top: -8px;
`;
export const Date = styled(Typography)<StyledTypoGraphy>`
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    text-transform: capitalize;
    color: #444;
`;
export const LockIcon = styled(Lock)`
    height: 16px;
    width: 16px;
    color: #fff;
`;
export const Month = styled(Typography)<StyledTypoGraphy>`
    font-weight: 500;
    font-size: 12px;
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
    max-width: 480px;
    flex-direction: ${({ dir }) => (dir === 'rtl' ? 'row' : 'row')};
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
        transform: rotate(${({ dir }) => (dir === 'rtl' ? '180deg' : '0deg')});
    }
`;
export const StyledPopper = styled(Box)<any>`
    text-align: center;
    padding: 6px;
    font-size: 12px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    ${({ theme: { palette } }) => css`
        background: ${palette.primary.light};
    `};
`;
export const TabP = styled(TabPanel)`
    height: 0;
    overflow: hidden;
    padding: 0;
    margin: 0;
`;
