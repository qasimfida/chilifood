import { SyntheticEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, TextField, CardContent, InputAdornment } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { validate } from 'validate.js';
// Components
import { AppLink, AppIconButton, AppAlert, AppForm } from '../../../components';
import Layout1 from '../../../layout/Layout1';
// Utils and Hooks
import { SHARED_CONTROL_PROPS, eventPreventDefault } from '../../../utils/form';
import { generateValidNumber } from '../../../utils/generateValidNumber';
import { ObjectPropByName } from '../../../utils';
// Styles
import { Header, Icon, Link, StyledComp, Submit, Title, Wrapper } from '../styles';

interface FormStateValues {
    phoneNumber: string;
    password: string;
}

const Login = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const validation = () => ({
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
            },
        },
        password: {
            type: 'string',
            presence: true,
            length: {
                minimum: 3,
                maximum: 50,
            },
        },
    });

    const [state, setState] = useState<FormStateValues>({
        phoneNumber: '',
        password: '',
    });
    const [errors, setErrors] = useState<any>({});
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const handleShowPasswordClick = useCallback(() => {
        setShowPassword((oldValue) => !oldValue);
    }, []);

    const handleFormSubmit = useCallback(
        async (event: SyntheticEvent) => {
            event.preventDefault();
            const user = {
                ...state,
            };
            localStorage.setItem('user', JSON.stringify(user));

            navigate('/', { replace: true });
        },
        [state, navigate]
    );

    const handleCloseError = useCallback(() => setError(undefined), []);

    const onFieldBlur = (event: any) => {
        const { name, value } = event.target;
        const valid = (validation() as ObjectPropByName)[name];
        const err = validate({ [name]: value }, { [name]: valid });
        const errs = { ...errors, ...err };
        if (!err) {
            delete errs[name];
        }
        setErrors({ ...errs });
    };

    const onFieldChange = (event: any) => {
        const { name, value } = event.target;
        setState((prev: any) => {
            return { ...prev, [name]: value };
        });
    };

    const fieldGetError = (key: keyof ObjectPropByName) => {
        const errorMessages: Record<string, string> = {
            phoneNumber: t('PHONE_NUMBER_ERROR'),
            password: t('PASSWORD_ERROR'),
        };
        return errorMessages[key] || (errors as ObjectPropByName)[key]?.[0] || '';
    };

    const fieldHasError = (key: any) => {
        return (errors as ObjectPropByName)[key] ? true : false;
    };

    const isValid = validate(state, validation()) ? false : true;

    return (
        <Layout1 title={t('LOGIN')}>
            <Wrapper>
                <AppForm onSubmit={handleFormSubmit}>
                    <StyledComp>
                        <Header>
                            <Icon name="login" />
                            <Title component="h2" variant="h5">
                                {t('LOGIN')}
                            </Title>
                        </Header>
                        <CardContent>
                            <TextField
                                required
                                type="tel"
                                label={t('PHONE_NUMBER')}
                                name="phoneNumber"
                                inputProps={{ pattern: '[0-9]*', maxLength: 8, inputMode: 'numeric' }}
                                value={generateValidNumber(state.phoneNumber)}
                                error={fieldHasError('phoneNumber')}
                                helperText={fieldGetError('phoneNumber') || ' '}
                                id="phoneNumber"
                                autoComplete="new-phone-number"
                                onBlur={onFieldBlur}
                                onChange={onFieldChange}
                                {...SHARED_CONTROL_PROPS}
                            />
                            <TextField
                                required
                                type={showPassword ? 'text' : 'password'}
                                label={t('PASSWORD')}
                                name="password"
                                id="password"
                                autoComplete="new-password"
                                value={state.password}
                                error={fieldHasError('password')}
                                helperText={fieldGetError('password') || ' '}
                                onBlur={onFieldBlur}
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
                                    {t('FORGET_PASSWORD')}
                                </Link>
                            </Grid>
                            {error ? (
                                <AppAlert severity="error" onClose={handleCloseError}>
                                    {error}
                                </AppAlert>
                            ) : null}
                            <Grid container justifyContent="center" alignItems="center">
                                <Submit type="submit" disabled={!isValid} color="primary" fullWidth>
                                    {t('LOGIN')}
                                </Submit>
                            </Grid>

                            <Grid container justifyContent="center" alignItems="center">
                                {t('LOGIN.HAVE_ACCOUNT')}
                                <Link variant="text" color="primary" component={AppLink} to="/personal-details">
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
