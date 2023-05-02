import { AppStore } from './store';
import { AppThemeProvider } from './theme';
import Routes from './routes';
import Layout from './layout';
import { ErrorBoundary } from './components';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './locale/index';

/**
 * Root Application Component
 */
const App: React.FC<any> = (props) => {
    // const { i18n } = useTranslation();
    return (
        <ErrorBoundary name="App">
            <I18nextProvider i18n={i18n}>
                <AppStore>
                    <AppThemeProvider>
                        <BrowserRouter>
                            <Routes />
                        </BrowserRouter>
                    </AppThemeProvider>
                </AppStore>
            </I18nextProvider>
        </ErrorBoundary>
    );
};

export default App;
