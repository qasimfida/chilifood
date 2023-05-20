import { SyntheticEvent, useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, TextField, CardContent, LinearProgress, Autocomplete } from '@mui/material';
import { AppAlert, AppForm } from '../../../components';
import { useAppForm, SHARED_CONTROL_PROPS } from '../../../utils/form';
import { Header, Logo, StyledComp, Submit, Title, Wrapper } from '../styles';
import logo from './../../../assets/logos/logo.png';
import { cities } from './data';
import Layout1 from '../../../layout/Layout1';

const VALIDATION = {
    street: {
        type: 'string',
        presence: true,
        length: {
            minimum: 1,
            maximum: 30,
        },
    },
    avenue: {
        presence: { allowEmpty: true },
        type: 'string',
        length: {
            maximum: 30,
        },
    },
    block: {
        presence: true,
        type: 'string',
        length: {
            minimum: 1,
            maximum: 3,
        },
    },
    house: {
        presence: true,
        type: 'string',
        length: {
            minimum: 1,
            maximum: 5,
        },
    },
    city: {
        presence: true,
    },
};

interface FormStateValues {
    block: string;
    lastName: string;
    street: string;
    avenue: string;
    house: string;
    confirmPassword?: string;
    city: {
        label: string;
        year: number;
    } | null;
}

const Address = () => {
    const navigate = useNavigate();

    const [formState, , /* setFormState */ onFieldChange, fieldGetError, fieldHasError] = useAppForm({
        validationSchema: VALIDATION, // the state value, so could be changed in time
        initialValues: {
            block: '',
            street: '',
            avenue: '',
            house: '',
            city: null,
        } as FormStateValues,
    });
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
    const handleFormSubmit = useCallback(
        async (event: SyntheticEvent) => {
            event.preventDefault();

            const apiResult = true; // await api.auth.signup(values);

            if (!apiResult) {
                setError('Can not create user for given street, if you already have account please sign in');
                return; // Unsuccessful signup
            }

            // dispatch({ type: 'SIGN_UP' });
            return navigate('/', { replace: true });
        },
        [/*values,*/ navigate]
    );

    const handleCloseError = useCallback(() => setError(undefined), []);

    if (loading) return <LinearProgress />;

    return (
        <Layout1 title="Address" menuHeader withFooter>
            <Wrapper>
                <AppForm onSubmit={handleFormSubmit}>
                    <StyledComp>
                        <Header>
                            <Logo src={logo} alt="logo" />
                            <Title component="h2" variant="h5">
                                Please fill the detials
                            </Title>
                        </Header>
                        <CardContent>
                            <Autocomplete
                                disablePortal
                                id="city"
                                options={cities}
                                value={values.city}
                                renderInput={(params) => (
                                    <TextField
                                        name="city"
                                        {...params}
                                        label="City"
                                        error={fieldHasError('city')}
                                        helperText={fieldGetError('city') || ' '}
                                    />
                                )}
                                onChange={(event, value) => onFieldChange(event, value, 'city')}
                            />
                            <TextField
                                required
                                label="street"
                                name="street"
                                value={values.street}
                                error={fieldHasError('street')}
                                helperText={fieldGetError('street') || ' '}
                                onChange={onFieldChange}
                                {...SHARED_CONTROL_PROPS}
                            />
                            <TextField
                                required
                                label="Block"
                                name="block"
                                value={values.block}
                                error={fieldHasError('block')}
                                helperText={fieldGetError('block') || ' '}
                                onChange={onFieldChange}
                                {...SHARED_CONTROL_PROPS}
                            />
                            <TextField
                                label="Avenue"
                                name="avenue"
                                value={values.avenue}
                                error={fieldHasError('avenue')}
                                helperText={fieldGetError('avenue') || ' '}
                                onChange={onFieldChange}
                                {...SHARED_CONTROL_PROPS}
                            />
                            <TextField
                                required
                                label="House"
                                name="house"
                                value={values.house}
                                error={fieldHasError('house')}
                                helperText={fieldGetError('house') || ' '}
                                onChange={onFieldChange}
                                {...SHARED_CONTROL_PROPS}
                            />

                            {error ? (
                                <AppAlert severity="error" onClose={handleCloseError}>
                                    {error}
                                </AppAlert>
                            ) : null}

                            <Grid container justifyContent="center" alignItems="center">
                                <Submit type="submit" color="primary" disabled={!formState.isValid} fullWidth>
                                    Next
                                </Submit>
                            </Grid>
                        </CardContent>
                    </StyledComp>
                </AppForm>
            </Wrapper>
        </Layout1>
    );
};

export default Address;
