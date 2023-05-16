import { store } from './store';
import { AppThemeProvider } from './theme';
import Routes from './routes';
import { ErrorBoundary } from './components';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './locale/index';
import { Provider } from 'react-redux';

/**
 * Root Application Component
 */
const App: React.FC<any> = (props) => {
    return (
        <ErrorBoundary name="App">
            <I18nextProvider i18n={i18n}>
                <Provider store={store}>
                    <AppThemeProvider>
                        <BrowserRouter>
                            <Routes />
                        </BrowserRouter>
                    </AppThemeProvider>
                </Provider>
            </I18nextProvider>
        </ErrorBoundary>
    );
};

export default App;
