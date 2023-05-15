import { Box, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

interface StyledTabsProps {
    dir: string;
}

export const Title = styled(Typography)({
    margin: ' 0px',
    marginTop: '3rem',
    fontWeight: '700',
    fontSize: '30px',
    letterSpacing: '0.8px',
});
const TabWrapper = styled(Box)<any>(({ dir }) => ({
    marginTop: '2rem',
    display: 'flex',

    '& .MuiTabs-indicator': {
        left: dir !== 'rtl' ? 'unset' : '0',
        right: dir !== 'rtl' ? '0' : 'unset',
    },
}));

export const StyledTab = styled(Tab)({
    padding: '0 4px',
    alignItems: 'baseline',
    fontSize: '13px',
    textTransform: 'capitalize',
});
export const StyledTabs = styled(Tabs)((props) => ({
    // borderRight: `${props.dir === 'rtl' ? 'unset' : '1px solid #c1c1c1'} `,
    // borderLeft: `${props.dir === 'rtl' ? '1px solid #c1c1c1' : 'unset'} `,
    maxWidth: '150px',
    width: '100%',
}));
export const TabContent = styled(Box)({
    padding: '8px 16px',
    '& p': {
        fontSize: '14px',
    },
});
export const TabHeading = styled('h4')({
    margin: '0',
    fontWeight: '700',
    fontSize: '20px',
    color: '#579b3f',
});

export default TabWrapper;
