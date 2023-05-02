import { PaletteOptions, SimplePaletteColorOptions } from '@mui/material';

const COLOR_PRIMARY: SimplePaletteColorOptions = {
    main: '#579b3f',
    light: '#e9f1e7',
    dark: '#579b3f',
};

const COLOR_SECONDARY: SimplePaletteColorOptions = {
    main: '#4d4d4d',
    dark: '#f3f3f3',
    light: '#fbfbfb',
};

/**
 * MUI colors set to use in theme.palette
 */
export const PALETTE_COLORS: Partial<PaletteOptions> = {
    primary: COLOR_PRIMARY,
    secondary: COLOR_SECONDARY,
    // error: COLOR_ERROR,
    // warning: COLOR_WARNING;
    // info: COLOR_INFO;
    // success: COLOR_SUCCESS;
};
