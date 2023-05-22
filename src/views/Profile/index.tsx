import * as React from 'react';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Layout1 from '../../layout/Layout1';
import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Wrapper, { StyledComp, StyledTitle, Submit } from './styles';

import { SyntheticEvent, useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, TextField, LinearProgress, Autocomplete } from '@mui/material';
import { AppForm } from '../../components';
import { cities } from '../Auth/Signup/data';
import { SHARED_CONTROL_PROPS, useAppForm } from '../../utils';
import Table from '../../components/Table';

// Props_Types
interface FormStateValues {
    name: string;
    block: string;
    street: string;
    avenue: string;
    house: string;
    city: {
        label: string;
        year: number;
    } | null;
}

const VALIDATION = {
    name: {
        type: 'string',
        presence: { allowEmpty: false },
        format: {
            pattern: '[a-zA-Z\u0600-\u06FFs]*', // Note: Allow only alphabets and space
            message: 'must consist of only alphabets',
        },
        length: {
            minimum: 2,
            maximum: 30,
            message: 'must be more than 2 letters',
        },
    },
    street: {
        type: 'string',
        presence: { allowEmpty: true },
        length: {
            minimum: 1,
            maximum: 30,
            message: 'must be more than 1 letter',
        },
    },
    avenue: {
        presence: { allowEmpty: true },
        type: 'string',
        length: {
            maximum: 30,
            message: 'must be less than 30 letter',
        },
    },
    block: {
        presence: true,
        type: 'string',
        length: {
            minimum: 1,
            maximum: 3,
            message: 'must be 1 - 3 letter',
        },
    },
    house: {
        presence: true,
        type: 'string',
        length: {
            minimum: 1,
            maximum: 5,
            message: 'must be 1 - 5 letter',
        },
    },
    city: {
        presence: true,
    },
};

const Profile = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    const { t } = useTranslation();

    const navigate = useNavigate();

    const [formState, , /* setFormState */ onFieldChange, fieldGetError, fieldHasError, onFieldBlur] = useAppForm({
        validationSchema: VALIDATION, // the state value, so could be changed in time
        initialValues: {
            block: '',
            street: '',
            avenue: '',
            house: '',
            city: null,
        } as FormStateValues,
        validateOnBlur: true,
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

    // const handleCloseError = useCallback(() => setError(undefined), []);
    if (loading) return <LinearProgress />;
    console.log({ error });
    return (
        <Layout1 title={`Profile/${value === '1' ? 'Personal Details' : 'My Subscriptions'}`}>
            <Wrapper>
                <Container>
                    <TabContext value={value}>
                        <Box>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <StyledTitle label="Personal Details" value="1" />
                                <StyledTitle label={t('PERSONAL_DETAILS.MY_SUBSCRIPTION')} value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <AppForm onSubmit={handleFormSubmit} maxWidth={'100%'}>
                                <StyledComp>
                                    <Grid container>
                                        <Grid container item xs={12} md={6} spacing={2}>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    label={t('NAME')}
                                                    name="name"
                                                    value={values.name}
                                                    error={fieldHasError('name')}
                                                    helperText={fieldGetError('name') || ' '}
                                                    onChange={onFieldChange}
                                                    onBlur={onFieldBlur}
                                                    className="custom-styles"
                                                    {...SHARED_CONTROL_PROPS}
                                                />
                                            </Grid>
                                            <Grid xs={12} item>
                                                <Autocomplete
                                                    disablePortal
                                                    id="city"
                                                    options={cities}
                                                    value={values.city}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            name="city"
                                                            {...params}
                                                            label={t('PERSONAL_DETAILS.CITY')}
                                                            error={fieldHasError('city')}
                                                            helperText={fieldGetError('city') || ' '}
                                                        />
                                                    )}
                                                    onBlur={onFieldBlur}
                                                    onChange={(event, value) => onFieldChange(event, value, 'city')}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="street"
                                                    label={t('PERSONAL_DETAILS.STREET')}
                                                    name="street"
                                                    value={values.street}
                                                    error={fieldHasError('street')}
                                                    helperText={fieldGetError('street') || ' '}
                                                    onChange={onFieldChange}
                                                    onBlur={onFieldBlur}
                                                    autoComplete="off"
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="block"
                                                    label={t('PERSONAL_DETAILS.BLOCK')}
                                                    name="block"
                                                    value={values.block}
                                                    error={fieldHasError('block')}
                                                    helperText={fieldGetError('block') || ' '}
                                                    onChange={onFieldChange}
                                                    onBlur={onFieldBlur}
                                                    autoComplete="off"
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    fullWidth
                                                    id="avenue"
                                                    label={t('PERSONAL_DETAILS.AVENUE')}
                                                    name="avenue"
                                                    value={values.avenue}
                                                    error={fieldHasError('avenue')}
                                                    helperText={fieldGetError('avenue') || ' '}
                                                    onChange={onFieldChange}
                                                    onBlur={onFieldBlur}
                                                    autoComplete="off"
                                                />
                                                {/*  */}
                                            </Grid>

                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="house"
                                                    label={t('PERSONAL_DETAILS.HOUSE')}
                                                    name="house"
                                                    value={values.house}
                                                    error={fieldHasError('house')}
                                                    helperText={fieldGetError('house') || ' '}
                                                    onChange={onFieldChange}
                                                    onBlur={onFieldBlur}
                                                    autoComplete="off"
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={12} sm={6}>
                                                <Submit type="submit" color="primary" fullWidth>
                                                    {t('PERSONAL_DETAILS.SAVE')}
                                                </Submit>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </StyledComp>
                            </AppForm>
                        </TabPanel>

                        <TabPanel value="2">
                            <Table />
                        </TabPanel>
                    </TabContext>
                </Container>
            </Wrapper>
        </Layout1>
    );
};

export default Profile;
