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
import { useAppForm, SHARED_CONTROL_PROPS, eventPreventDefault } from '../../../utils/form';
import { Header, Link, Logo, StyledComp, Submit, Title, Wrapper } from '../styles';
import logo from './../../../assets/logos/logo.png';
import { useTranslation } from 'react-i18next';
import Layout1 from '../../../layout/Layout1';

const validation = (t: any) => ({
    phone: {
        type: 'string',
        format: {
            pattern: '^$|[- .+()0-9]+', // Note: We have to allow empty in the pattern
        },
        length: {
            minimum: 8,
            maximum: 8,
            message: t('signup.phone'),
        },
    },
    firstName: {
        type: 'string',
        presence: { allowEmpty: false },
        format: {
            pattern: '^[A-Za-z ]+$', // Note: Allow only alphabets and space
            message: 'phone number field must be 8 numbers',
        },
        length: {
            minimum: 3,
            maximum: 15,
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
});

interface FormStateValues {
    firstName: string;
    phone: string;
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

    // const [, dispatch] = useAppStore();
    const [validationSchema, setValidationSchema] = useState<any>({
        ...validation(t),
    });
    const [formState, , /* setFormState */ onFieldChange, fieldGetError, fieldHasError, onFieldBlur] = useAppForm({
        validationSchema: validationSchema, // the state value, so could be changed in time
        initialValues: {
            firstName: '',
            phone: '',
            password: '',
        } as FormStateValues,
        validateOnBlur: true,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [agree, setAgree] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>();
    const values = formState.values as FormStateValues; // Typed alias to formState.values as the "Source of Truth"

    useEffect(() => {
        // Component Mount
        let componentMounted = true;

        async function fetchData() {
            //TODO: Call any Async API here
            if (!componentMounted) return; // Component was unmounted during the API call
            //TODO: Verify API call here

            setLoading(false); // Reset "Loading..." indicator
        }
        fetchData(); // Call API asynchronously

        return () => {
            // Component Un-mount
            componentMounted = false;
        };
    }, []);

    useEffect(() => {
        // Update Validation Schema when Show/Hide password changed
        let newSchema;
        if (showPassword) {
            newSchema = validation(t); // Validation without .confirmPassword
        } else {
            newSchema = { ...validation(t) }; // Full validation
        }
        setValidationSchema(newSchema);
    }, [showPassword]);

    const handleShowPasswordClick = useCallback(() => {
        setShowPassword((oldValue) => !oldValue);
    }, []);

    const handleAgreeClick = useCallback(() => {
        setAgree((oldValue) => !oldValue);
    }, []);

    const handleFormSubmit = useCallback(
        async (event: SyntheticEvent) => {
            event.preventDefault();

            const apiResult = true; // await api.auth.signup(values);

            // if (!apiResult) {
            //     setError('Can not create user for given email, if you already have account please sign in');
            //     return; // Unsuccessful signup
            // }

            // dispatch({ type: 'SIGN_UP' });
            return navigate('/', { replace: true });
        },
        [/*values,*/ navigate]
    );

    const handleCloseError = useCallback(() => setError(undefined), []);

    if (loading) return <LinearProgress />;

    return (
        <Layout1 title="Signup" menuHeader>
            <Wrapper>
                <AppForm onSubmit={handleFormSubmit}>
                    <StyledComp>
                        <Header>
                            <Logo src={logo} alt="logo" />
                            <Title component="h2" variant="h5">
                                {t('SIGNUP.TITLE')} Chili Food
                            </Title>
                        </Header>
                        <CardContent>
                            <TextField
                                required
                                type="number"
                                label={t('PHONE_NUMBER')}
                                name="phone"
                                inputProps={{ pattern: /^[0-9]*$/ }}
                                value={values.phone}
                                error={fieldHasError('phone')}
                                helperText={fieldGetError('phone') || ' '}
                                onChange={onFieldChange}
                                onBlur={onFieldBlur}
                                {...SHARED_CONTROL_PROPS}
                            />
                            <TextField
                                required
                                label={t('FIRST_NAME')}
                                name="firstName"
                                value={values.firstName}
                                error={fieldHasError('firstName')}
                                helperText={fieldGetError('firstName') || ' '}
                                onChange={onFieldChange}
                                onBlur={onFieldBlur}
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
                                onChange={onFieldChange}
                                onBlur={onFieldBlur}
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
                            <FormControlLabel
                                control={<Checkbox required name="agree" checked={agree} onChange={handleAgreeClick} />}
                                label={
                                    <>
                                        {t('SIGNUP.AGREE')}
                                        <Button
                                            variant="text"
                                            color="primary"
                                            component={AppLink}
                                            to="/auth/recovery/password"
                                        >
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
                                    disabled={!(formState.isValid && agree)}
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
