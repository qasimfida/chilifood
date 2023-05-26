import { SyntheticEvent, useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Grid,
    TextField,
    CardContent,
    Checkbox,
    FormControlLabel,
    InputAdornment,
    LinearProgress,
    Button,
} from '@mui/material';
// import { useAppStore } from '../../../store';
import { AppIconButton, AppAlert, AppForm, AppLink } from '../../../components';
import { SHARED_CONTROL_PROPS, eventPreventDefault } from '../../../utils/form';
import { Header, Icon, Link, StyledComp, Submit, Title, Wrapper } from '../styles';
import { useTranslation } from 'react-i18next';
import Layout1 from '../../../layout/Layout1';
import { generateValidNumber } from '../../../utils/generateValidNumber';
import { ObjectPropByName } from '../../../utils';
import { validate } from 'validate.js';

const validation = (t: any) => ({
    phoneNumber: {
        type: 'string',
        format: {
            pattern: '[0-9]*', // Note: We have to allow empty in the pattern
        },
        length: {
            minimum: 8,
            maximum: 8,
            message: 'field must be 8 numbers',
        },
    },
    password: {
        type: 'string',
        presence: true,
        length: {
            minimum: 3,
            maximum: 50,
            message: 'password must be more than 3 digits',
        },
    },
});

interface FormStateValues {
    phoneNumber: string;
    password: string;
    confirmPassword?: string;
}

/**
 * Renders "Signup" view
 * url: /auth/signup
 */
const Signup = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    // const [formState, , /* setFormState */ onFieldChange, fieldGetError, fieldHasError, onFieldBlur] = useAppForm({
    //     validationSchema: validationSchema, // the state value, so could be changed in time
    //     initialValues: {
    //         phoneNumber: '',
    //         password: '',
    //     } as FormStateValues,
    //     validateOnBlur: true,
    // });
    // const values = formState.values as FormStateValues; // Typed alias to formState.values as the "Source of Truth"
    const [showPassword, setShowPassword] = useState(false);
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState<string>();
    const [state, setState] = useState<FormStateValues>({
        phoneNumber: '',
        password: '',
    });
    const [errors, setErrors] = useState<any>({});

    const handleShowPasswordClick = useCallback(() => {
        setShowPassword((oldValue) => !oldValue);
    }, []);

    const handleAgreeClick = useCallback(() => {
        setAgree((oldValue) => !oldValue);
    }, []);

    const handleFormSubmit = useCallback(
        async (event: SyntheticEvent) => {
            event.preventDefault();
            const user = JSON.parse(localStorage.getItem('temp') || '{}');
            const updateUser = Object.assign(user, state);
            localStorage.setItem('temp', JSON.stringify(updateUser));
            return navigate('/auth/signup/confirm-otp');
        },
        [state, navigate]
    );

    const handleCloseError = useCallback(() => setError(undefined), []);

    const onFieldBlur = (event: any) => {
        const { name, value } = event.target;
        const valid = (validation(t) as ObjectPropByName)[name];
        const err = validate({ [name]: value }, { [name]: valid });
        const errs = { ...errors, ...err };
        if (!err) {
            delete errs[name];
        }
        setErrors({ ...errs });
    };
    const onFieldChange = (event: any) => {
        const { name, value } = event.target;
        setState((prev) => {
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
    const isValid = validate(state, validation(t)) ? false : true;

    if (false) return <LinearProgress />;

    return (
        <Layout1 title="Register">
            <Wrapper>
                <AppForm onSubmit={handleFormSubmit}>
                    <StyledComp>
                        <Header>
                            <Icon name="register" />
                            <Title component="h2" variant="h5">
                                {t('SIGNUP.TITLE')}
                            </Title>
                        </Header>
                        <CardContent>
                            <TextField
                                required
                                type="tel"
                                label={t('PHONE_NUMBER')}
                                name="phoneNumber"
                                id="phoneNumber"
                                inputProps={{ pattern: '[0-9]*', maxLength: 8, inputMode: 'numeric' }}
                                value={generateValidNumber(state.phoneNumber)}
                                error={fieldHasError('phoneNumber')}
                                helperText={fieldGetError('phoneNumber') || ' '}
                                onChange={onFieldChange}
                                onBlur={onFieldBlur}
                                {...SHARED_CONTROL_PROPS}
                            />
                            <TextField
                                required
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                label={t('PASSWORD')}
                                name="password"
                                autoComplete="new-password"
                                value={state.password}
                                error={fieldHasError('password')}
                                helperText={fieldGetError('password') || ' '}
                                onChange={onFieldChange}
                                onBlur={onFieldBlur}
                                {...SHARED_CONTROL_PROPS}
                                InputProps={{
                                    inputMode: 'numeric',
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
                            <FormControlLabel
                                control={<Checkbox required name="agree" checked={agree} onChange={handleAgreeClick} />}
                                label={
                                    <>
                                        {t('SIGNUP.AGREE')}
                                        <Button variant="text" color="primary" component={AppLink} to="/terms-policy">
                                            {t('SIGNUP.TERMS_AND_CONDITIONS')}
                                        </Button>
                                    </>
                                }
                            />

                            {error ? (
                                <AppAlert severity="error" onClose={handleCloseError}>
                                    {error}
                                </AppAlert>
                            ) : null}

                            <Grid container justifyContent="center" alignItems="center">
                                <Submit
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    disabled={!(isValid && agree)}
                                    fullWidth
                                >
                                    {t('SIGNUP.SIGN_UP')}
                                </Submit>
                            </Grid>
                            <Grid container justifyContent="center" alignItems="center">
                                {t('SIGNUP.ALREADY_ACCOUNT')}?
                                <Link variant="text" color="primary" component={AppLink} to="/auth">
                                    {t('LOGIN')}
                                </Link>
                            </Grid>
                        </CardContent>
                    </StyledComp>
                </AppForm>
            </Wrapper>
        </Layout1>
    );
};

export default Signup;
