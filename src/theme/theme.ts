import { PALETTE_COLORS } from './colors';

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
