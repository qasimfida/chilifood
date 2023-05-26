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
    const { i18n } = useTranslation();
    // English translations
    const enLocalization = {
        datePicker: {
            calendarHeaderText: 'Select a date',
        },
    };

    // Arabic translations
    const arLocalization = {
        datePicker: {
            calendarHeaderText: 'اختر تاريخًا',
        },
    };
    const localization = i18n.language === 'ar' ? arLocalization : enLocalization;

    return (
        <LocalizationProvider
            dateAdapter={AdapterDateFns}
            localeText={{ cancelButtonLabel: 'لغو', okButtonLabel: 'تأیید', clearButtonLabel: 'پاک کردن' }}
        >
            <Provider store={store}>
                <AppThemeProvider>
                    <BrowserRouter>
                        <Routes />
                    </BrowserRouter>
                </AppThemeProvider>
            </Provider>
        </LocalizationProvider>
    );
};
const App: React.FC<any> = (props) => {
    return (
        <ErrorBoundary name="App">
            <I18nextProvider i18n={i18n}>
                <Locaization />
            </I18nextProvider>
        </ErrorBoundary>
    );
};

export default App;
