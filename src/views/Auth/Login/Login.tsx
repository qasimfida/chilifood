import { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, TextField, CardContent, InputAdornment, Box, createTheme, useTheme } from '@mui/material';
// import { useAppStore } from '../../../store';
import { AppButton, AppLink, AppIconButton, AppAlert, AppForm, AppIcon } from '../../../components';
import { useAppForm, SHARED_CONTROL_PROPS, eventPreventDefault } from '../../../utils/form';
import logo from './../../../assets/logos/logo.png';
import { Header, Icon, Link, Logo, StyledComp, Submit, Title, Wrapper } from '../styles';
import { useTranslation } from 'react-i18next';
import Layout1 from '../../../layout/Layout1';
import { generateValidNumber } from '../../../utils/generateValidNumber';

const VALIDATION = {
    phoneNumber: {
        presence: true,
        type: 'string',
        format: {
            pattern: '[0-9]*', // Note: We have to allow empty in the pattern
            message: 'should contain numbers',
        },
        length: {
            minimum: 8,
            maximum: 8,
            message: 'field must be 8 numbers',
        },
    },
    password: {
        presence: true,
        length: {
            minimum: 3,
            maximum: 50,
            message: 'password must be more than 3 digits',
        },
    },
};

interface FormStateValues {
    phoneNumber: string;
    password: string;
}

/**
 * Renders "Login with Email" view for Login flow
 * url: /auth/login/email
 */

const Login = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    // const [, dispatch] = useAppStore();
    const [formState, , /* setFormState */ onFieldChange, fieldGetError, fieldHasError, onFieldBlur] = useAppForm({
        validationSchema: VALIDATION,
        initialValues: { phoneNumber: '', password: '' } as FormStateValues,
        validateOnBlur: true,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string>();
    const values = formState.values as FormStateValues; // Typed alias to formState.values as the "Source of Truth"

    const handleShowPasswordClick = useCallback(() => {
        setShowPassword((oldValue) => !oldValue);
    }, []);

    const handleFormSubmit = useCallback(
        async (event: SyntheticEvent) => {
            event.preventDefault();

            const result = true; // await api.auth.loginWithEmail(values);
            if (!result) {
                setError('Please check phoneNumber and password');
                return;
            }

            // dispatch({ type: 'LOG_IN' });
            navigate('/', { replace: true });
        },
        [/*values,*/ navigate]
    );
    let theme = useTheme();
    const handleClick = () => {
        const lng = i18n.language;
        i18n.changeLanguage(lng === 'ar' ? 'en' : 'ar');
        console.log(i18n.dir());
        document.body.dir = i18n.dir();
        const updateTheme = createTheme({ ...theme, direction: i18n.dir() });
        theme = updateTheme;
    };

    const handleCloseError = useCallback(() => setError(undefined), []);
    // Locally Data Store
    const [userNumber, setUserNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Store data in local storage
        const user = {
            userNumber,
            password,
        };
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/');
    };

    return (
        <Layout1 title="Login" menuHeader>
            <Wrapper>
                <AppForm onSubmit={handleFormSubmit}>
                    <StyledComp>
                        <Header>
                            <Icon name="login" />
                            <Title component="h2" variant="h5">
                                Login
                            </Title>
                        </Header>
                        <CardContent>
                            <TextField
                                required
                                type="tel"
                                label={t('PHONE_NUMBER')}
                                name="phoneNumber"
                                inputProps={{ pattern: '[0-9]*', maxLength: 8 }}
                                value={generateValidNumber(values.phoneNumber)}
                                error={fieldHasError('phoneNumber')}
                                helperText={fieldGetError('phoneNumber') || ' '}
                                id="phoneNumber"
                                autoComplete="phoneNumber"
                                autoFocus
                                onBlur={onFieldBlur}
                                onChange={(e) => {
                                    onFieldChange(e);
                                    setUserNumber(e.target.value);
                                }}
                                {...SHARED_CONTROL_PROPS}
                            />
                            <TextField
                                required
                                type={showPassword ? 'text' : 'password'}
                                label={t('PASSWORD')}
                                name="password"
                                value={values.password}
                                error={fieldHasError('password')}
                                helperText={fieldGetError('password') || ' '}
                                onBlur={onFieldBlur}
                                onChange={(e) => {
                                    onFieldChange(e);
                                    setPassword(e.target.value);
                                }}
                                {...SHARED_CONTROL_PROPS}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <AppIconButton
                                                aria-label="toggle password visibility"
                                                icon={showPassword ? 'visibilityon' : 'visibilityoff'}
                                                title={showPassword ? 'Hide Password' : 'Show Password'}
                                                onClick={handleShowPasswordClick}
                                                onMouseDown={eventPreventDefault}
                                            />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Grid container justifyContent="flex-end" alignItems="center">
                                <Link variant="text" color="inherit" component={AppLink} to="/auth/recovery/password">
                                    {t('FORGET_PASSWORD')}
                                </Link>
                            </Grid>
                            {error ? (
                                <AppAlert severity="error" onClose={handleCloseError}>
                                    {error}
                                </AppAlert>
                            ) : null}
                            <Grid container justifyContent="center" alignItems="center">
                                <Submit
                                    type="submit"
                                    onClick={handleLogin}
                                    disabled={!formState.isValid}
                                    color="primary"
                                    fullWidth
                                >
                                    {t('LOGIN')}
                                </Submit>
                            </Grid>

                            <Grid container justifyContent="center" alignItems="center">
                                {t('LOGIN.HAVE_ACCOUNT')}
                                <Link variant="text" color="primary" component={AppLink} to="/auth/signup">
                                    {t('LOGIN.CREATE_ACCOUNT')}
                                </Link>
                            </Grid>
                        </CardContent>
                    </StyledComp>
                </AppForm>
            </Wrapper>
        </Layout1>
    );
};

export default Login;
