import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Layout1 from '../../layout/Layout1';
import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Wrapper, { StyledComp, StyledGrid, StyledTitle, Submit, Tabs } from './styles';

import { SyntheticEvent, useCallback, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, TextField, Autocomplete } from '@mui/material';
import { AppForm } from '../../components';
import { cities } from '../Auth/Signup/data';
import { ObjectPropByName, SHARED_CONTROL_PROPS } from '../../utils';
import Table from '../../components/Table';
import { IUser, useIsAuthenticated } from '../../hooks';
import { validate } from 'validate.js';

const Profile = () => {
    const user = useIsAuthenticated();
    const { t } = useTranslation();
    const validation = {
        name: {
            type: 'string',
            presence: { allowEmpty: false, message: t('ISREQUIRED') },
            format: {
                pattern: /^[a-zA-Z\u0600-\u06FF\s]*$/, // Note: Allow only alphabets
                message: 'INVALID_NAME',
            },
            length: {
                minimum: 1,
                maximum: 30,
                message: t('ERROR.PREFIX') + ' 30 ' + t('ERROR.DIGITS'),
            },
        },
        street: {
            type: 'string',
            presence: { allowEmpty: false, message: t('ISREQUIRED') },
            length: {
                minimum: 1,
                maximum: 30,
                message: t('ERROR.PREFIX') + ' 30 ' + t('ERROR.DIGITS'),
            },
        },
        avenue: {
            presence: { allowEmpty: true, message: t('ISREQUIRED') },
            type: 'string',
            length: {
                maximum: 30,
                message: t('ERROR.PREFIX') + ' 30 ' + t('ERROR.DIGITS'),
            },
        },
        block: {
            presence: { allowEmpty: false, message: t('ISREQUIRED') },
            type: 'string',
            length: {
                minimum: 1,
                maximum: 4,
                message: t('ERROR.PREFIX') + ' 4 ' + t('ERROR.DIGITS'),
            },
        },
        house: {
            presence: { allowEmpty: false, message: t('ISREQUIRED') },
            type: 'string',
            length: {
                minimum: 1,
                maximum: 5,
                message: t('ERROR.PREFIX') + ' 5 ' + t('ERROR.DIGITS'),
            },
        },
        city: {
            presence: {
                allowEmpty: false,
                message: t('PERSONAL_DETAILS.PLEASE_SELECT_CITY'),
            },
        },
    };

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const [value, setValue] = useState<string>('0');

    useEffect(() => {
        if (id) {
            setValue(id || '0');
        }
    }, [id]);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    const [state, setState] = useState<IUser>({
        name: user?.name || '',
        block: user?.block || '',
        street: user?.street || '',
        avenue: user?.avenue || '',
        house: user?.house || '',
        city: user?.city || null,
    });
    const [errors, setErrors] = useState<any>({});

    const handleFormSubmit = useCallback(
        async (event: SyntheticEvent) => {
            event.preventDefault();
            localStorage.setItem('user', JSON.stringify(Object.assign(user, state)));
        },
        [state, user]
    );

    const onFieldBlur = (event: any) => {
        const { name, value } = event.target;
        const valid = (validation as ObjectPropByName)[name];
        const err = validate({ [name]: value }, { [name]: valid });
        const errs = { ...errors, ...err };
        if (!err) {
            delete errs[name];
        }
        setErrors({ ...errs });
    };
    const onFieldChange = (event: any, val?: any, key?: string) => {
        const { name, value } = event.target;
        if (key) {
            setState((prev) => {
                return { ...prev, [key]: val };
            });
        } else {
            const limit = (validation as ObjectPropByName)[name]?.length?.maximum;
            if (value?.length <= limit) {
                setState((prev) => {
                    return { ...prev, [name]: value };
                });
            }
        }
    };
    const fieldGetError = (key: string, label: string) => {
        const errorMessage = (errors as ObjectPropByName)[key]?.[0];
        const translatedFieldName = t(label);
        if (key === 'city') {
            return translatedFieldName;
        }
        if (key === 'name' && errorMessage === 'Name INVALID_NAME') {
            return t('INVALID_NAME');
        }

        const fieldTranslations: { [key: string]: RegExp } = {
            NAME: /^Name/,
            'PERSONAL_DETAILS.STREET': /^Street/,
            'PERSONAL_DETAILS.BLOCK': /^Block/,
            'PERSONAL_DETAILS.AVENUE': /^Avenue/,
            'PERSONAL_DETAILS.HOUSE': /^House/,
        };
        return errorMessage?.replace(fieldTranslations[label], translatedFieldName) || '';
    };
    const fieldHasError = (key: any) => {
        return (errors as ObjectPropByName)[key] ? true : false;
    };
    const isValid = validate(state, validation) ? false : true;

    return (
        <Layout1
            title={`${t('PROFILE')}/${value === '0' ? t('PERSONAL_DETAILS') : t('PERSONAL_DETAILS.MY_SUBSCRIPTION')}`}
        >
            <Wrapper>
                <Container>
                    <TabContext value={value}>
                        <Box>
                            <Tabs onChange={handleChange} aria-label="lab API tabs example">
                                <StyledTitle label={t('PERSONAL_DETAILS')} value="0" />
                                {user.isAuthenticated && (
                                    <StyledTitle label={t('PERSONAL_DETAILS.MY_SUBSCRIPTION')} value="1" />
                                )}
                            </Tabs>
                        </Box>
                        <TabPanel value="0">
                            <AppForm onSubmit={handleFormSubmit} maxWidth={'100%'}>
                                <StyledComp>
                                    <StyledGrid container>
                                        <Grid container item xs={12} md={6} spacing={2}>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    label={t('NAME')}
                                                    name="name"
                                                    value={state.name}
                                                    error={fieldHasError('name')}
                                                    helperText={fieldGetError('name', 'NAME') || ' '}
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
                                                    value={state.city}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            name="city"
                                                            {...params}
                                                            label={t('PERSONAL_DETAILS.CITY')}
                                                            error={fieldHasError('city')}
                                                            helperText={
                                                                fieldGetError(
                                                                    'city',
                                                                    'PERSONAL_DETAILS.PLEASE_SELECT_CITY'
                                                                ) || ' '
                                                            }
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
                                                    value={state.street}
                                                    error={fieldHasError('street')}
                                                    helperText={
                                                        fieldGetError('street', 'PERSONAL_DETAILS.STREET') || ' '
                                                    }
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
                                                    value={state.block}
                                                    error={fieldHasError('block')}
                                                    helperText={fieldGetError('block', 'PERSONAL_DETAILS.BLOCK') || ' '}
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
                                                    value={state.avenue}
                                                    error={fieldHasError('avenue')}
                                                    helperText={
                                                        fieldGetError('avenue', 'PERSONAL_DETAILS.AVENUE') || ' '
                                                    }
                                                    onChange={onFieldChange}
                                                    onBlur={onFieldBlur}
                                                    autoComplete="off"
                                                />
                                            </Grid>

                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="house"
                                                    label={t('PERSONAL_DETAILS.HOUSE')}
                                                    name="house"
                                                    value={state.house}
                                                    error={fieldHasError('house')}
                                                    helperText={fieldGetError('house', 'PERSONAL_DETAILS.HOUSE') || ' '}
                                                    onChange={onFieldChange}
                                                    onBlur={onFieldBlur}
                                                    autoComplete="off"
                                                />
                                            </Grid>
                                        </Grid>
                                        <StyledGrid container>
                                            <Grid item xs={12} sm={6}>
                                                <Submit type="submit" color="primary" disabled={!isValid} fullWidth>
                                                    {t('PERSONAL_DETAILS.SAVE')}
                                                </Submit>
                                            </Grid>
                                        </StyledGrid>
                                    </StyledGrid>
                                </StyledComp>
                            </AppForm>
                        </TabPanel>

                        <TabPanel value="1">
                            <Table />
                        </TabPanel>
                    </TabContext>
                </Container>
            </Wrapper>
        </Layout1>
    );
};

export default Profile;
