import { ThemeOptions } from '@mui/material';
import { PALETTE_COLORS } from './colors';
import { Theme as MuiTheme } from '@mui/material/styles';
import i18n from '../locale/index';

declare module '@mui/material/styles' {
    interface Theme extends MuiTheme {
        direction: 'ltr' | 'rtl';
    }
}
export const THEME = {
    palette: {
        ...PALETTE_COLORS,
        background: {
            paper: '#f5f5f5', // Gray 100 - Background of "Paper" based component
            default: '#FFFFFF',
        },
        shadow: {
            paper: '#f5f5f5', // Gray 100 - Background of "Paper" based component
        },
    },
    typography: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
    },
};

export default THEME;
