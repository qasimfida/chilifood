import { SyntheticEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, TextField, CardContent, InputAdornment, Box, createTheme, useTheme } from '@mui/material';
// import { useAppStore } from '../../../store';
import { AppButton, AppLink, AppIconButton, AppAlert, AppForm } from '../../../components';
import { useAppForm, SHARED_CONTROL_PROPS, eventPreventDefault } from '../../../utils/form';
import { css, styled } from '@mui/system';
import logo from './../../../assets/logos/logo.png';
import { Header, Link, Logo, StyledComp, Submit, Title, Wrapper } from '../styles';
import { useTranslation } from 'react-i18next';

const VALIDATION = {
    number: {
        presence: true,
        type: 'string',
        format: {
            pattern: '^$|[- .+()0-9]+', // Note: We have to allow empty in the pattern
            message: 'should contain numbers',
        },
    },
    password: {
        presence: true,
        length: {
            minimum: 8,
            maximum: 32,
            message: 'must be between 8 and 32 characters',
        },
    },
};

interface FormStateValues {
    number: string;
    password: string;
}

/**
 * Renders "Login with Email" view for Login flow
 * url: /auth/login/email
 */

const Login = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    // const [, dispatch] = useAppStore();
    const [formState, , /* setFormState */ onFieldChange, fieldGetError, fieldHasError] = useAppForm({
        validationSchema: VALIDATION,
        initialValues: { number: '', password: '' } as FormStateValues,
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
                setError('Please check number and password');
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

    return (
        <Wrapper>
            <AppForm onSubmit={handleFormSubmit}>
                <StyledComp>
                    <Header>
                        <Logo src={logo} alt="logo" />
                        <Title component="h2" variant="h5">
                            Login to Chili Food
                        </Title>
                    </Header>
                    <CardContent>
                        <TextField
                            required
                            label="Number"
                            name="number"
                            value={values.number}
                            error={fieldHasError('number')}
                            helperText={fieldGetError('number') || ' '}
                            onChange={onFieldChange}
                            id="number"
                            autoComplete="number"
                            autoFocus
                            {...SHARED_CONTROL_PROPS}
                        />
                        <TextField
                            required
                            type={showPassword ? 'text' : 'password'}
                            label="Password"
                            name="password"
                            value={values.password}
                            error={fieldHasError('password')}
                            helperText={fieldGetError('password') || ' '}
                            onChange={onFieldChange}
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
                                Forgot Password
                            </Link>
                        </Grid>
                        {error ? (
                            <AppAlert severity="error" onClose={handleCloseError}>
                                {error}
                            </AppAlert>
                        ) : null}
                        <Grid container justifyContent="center" alignItems="center">
                            <Submit type="submit" disabled={!formState.isValid} color="primary" fullWidth>
                                Login
                            </Submit>
                        </Grid>

                        <Grid container justifyContent="center" alignItems="center" onClick={handleClick}>
                            Don't have an account?
                            <Link variant="text" color="primary" component={AppLink} to="/auth/signup">
                                Create account
                            </Link>
                        </Grid>
                    </CardContent>
                </StyledComp>
            </AppForm>
        </Wrapper>
    );
};

export default Login;