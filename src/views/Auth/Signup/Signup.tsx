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
import { Header, Icon, Link, StyledComp, Submit, Title, Wrapper } from '../styles';
import { useTranslation } from 'react-i18next';
import Layout1 from '../../../layout/Layout1';
import { generateValidNumber } from '../../../utils/generateValidNumber';

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
    name: {
        type: 'string',
        presence: { allowEmpty: false },
        format: {
            pattern: '^[A-Za-z ]+$', // Note: Allow only alphabets and space
            message: 'must consist of only alphabets',
        },
        length: {
            minimum: 2,
            maximum: 30,
            message: 'must be more than 2 letters',
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
});

interface FormStateValues {
    name: string;
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

    // const [, dispatch] = useAppStore();
    const [validationSchema, setValidationSchema] = useState<any>({
        ...validation(t),
    });
    const [formState, , /* setFormState */ onFieldChange, fieldGetError, fieldHasError, onFieldBlur] = useAppForm({
        validationSchema: validationSchema, // the state value, so could be changed in time
        initialValues: {
            name: '',
            phoneNumber: '',
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
    }, [showPassword, t]);

    const handleShowPasswordClick = useCallback(() => {
        setShowPassword((oldValue) => !oldValue);
    }, []);

    const handleAgreeClick = useCallback(() => {
        setAgree((oldValue) => !oldValue);
    }, []);

    const handleFormSubmit = useCallback(
        async (event: SyntheticEvent) => {
            event.preventDefault();

            // const apiResult = true; // await api.auth.signup(values);

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
        <Layout1 title="Register" menuHeader>
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
                                value={generateValidNumber(values.phoneNumber)}
                                error={fieldHasError('phoneNumber')}
                                helperText={fieldGetError('phoneNumber') || ' '}
                                onChange={onFieldChange}
                                onBlur={onFieldBlur}
                                {...SHARED_CONTROL_PROPS}
                            />
                            <TextField
                                required
                                label={t('NAME')}
                                name="name"
                                value={values.name}
                                error={fieldHasError('name')}
                                helperText={fieldGetError('name') || ' '}
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
                                value={values.password}
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
