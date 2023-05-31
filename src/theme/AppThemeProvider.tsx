import createCache from '@emotion/cache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { FunctionComponent, PropsWithChildren } from 'react';
import { prefixer } from 'stylis';
import THEME from './theme';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

function createEmotionCache() {
    return createCache({ key: 'css', prepend: true, stylisPlugins: [prefixer] });
}

// Client-side cache, shared for the whole session of the user in the browser.
const CLIENT_SIDE_EMOTION_CACHE = createEmotionCache();

interface Props extends PropsWithChildren {
    emotionCache?: EmotionCache;
}

const AppThemeProvider: FunctionComponent<Props> = ({ children, emotionCache = CLIENT_SIDE_EMOTION_CACHE }) => {
    const { i18n } = useTranslation();
    const theme = createTheme({ ...THEME, direction: i18n.dir() });

    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CacheProvider>
    );
};

export default AppThemeProvider;
