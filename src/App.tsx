import { store } from './store';
import { AppThemeProvider } from './theme';
import Routes from './routes';
import { ErrorBoundary } from './components';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './locale/index';
import { Provider } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ar, enUS } from 'date-fns/locale';

/**
 * Root Application Component
 */
const Locaization: React.FC = () => {
    const { i18n, t } = useTranslation();
    // English translations
    const enLocalization = { cancelButtonLabel: t('CANCEL'), okButtonLabel: t('OK') };

    // Arabic translations
    const arLocalization = { cancelButtonLabel: t('CANCEL'), okButtonLabel: t('OK') };

    const localization = i18n.language === 'ar' ? arLocalization : enLocalization;
    document.body.dir = i18n.dir();
    return (
        <LocalizationProvider
            dateAdapter={AdapterDateFns}
            localeText={localization}
            adapterLocale={i18n.language === 'ar' ? ar : enUS}
        >
            <Provider store={store}>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </Provider>
        </LocalizationProvider>
    );
};
const App: React.FC<any> = (props) => {
    return (
        <ErrorBoundary name="App">
            <I18nextProvider i18n={i18n}>
                <AppThemeProvider>
                    <Locaization />
                </AppThemeProvider>
            </I18nextProvider>
        </ErrorBoundary>
    );
};

export default App;
