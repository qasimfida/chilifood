import { SyntheticEvent, useCallback, useState } from 'react';
import { Container, Grid, TextField, Autocomplete } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { validate } from 'validate.js';
// Components
import Layout1 from '../../layout/Layout1';
import { AppForm } from '../../components';
// Utilties and Hooks
import { ObjectPropByName, SHARED_CONTROL_PROPS } from '../../utils';
import { IUser, useIsAuthenticated } from '../../hooks';
import { appValidation } from '../../utils/appValidation';
// Data
import { cities } from '../Auth/Signup/data';
// Styles
import Wrapper, { StyledComp, Submit } from './styles';

const PersonalDetails = () => {
    const { t } = useTranslation();
    const { profile } = appValidation(t);
    const location = useLocation();
    const user = useIsAuthenticated();
    const navigate = useNavigate();

    const [errors, setErrors] = useState<any>({});
    const [state, setState] = useState<IUser>({
        name: user?.name || '',
        block: user?.block || '',
        street: user?.street || '',
        avenue: user?.avenue || '',
        house: user?.house || '',
        city: user?.city || null,
    });

    const handleFormSubmit = useCallback(
        async (event: SyntheticEvent) => {
            event.preventDefault();
            localStorage.setItem('temp', JSON.stringify(state));
            return navigate(`/auth/signup${location?.search}`, { replace: true });
        },
        [state, navigate, location]
    );

    const onFieldBlur = (event: any) => {
        const { name, value } = event.target;
        const valid = (profile as ObjectPropByName)[name];
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
            console.log({ val, key });
            setState((prev) => {
                return { ...prev, [key]: val };
            });
        } else {
            const limit = (profile as ObjectPropByName)[name]?.length?.maximum;
            if (value?.length <= limit) {
                setState((prev) => {
                    return { ...prev, [name]: value };
                });
            }
        }
    };

    const fieldGetError = (key: string, label: string): string => {
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
    const isValid = validate(state, profile) ? false : true;

    return (
        <Layout1 title={`${t('PERSONAL_DETAILS')}`}>
            <Wrapper>
                <Container>
                    <AppForm onSubmit={handleFormSubmit} maxWidth={'100%'}>
                        <StyledComp>
                            <Grid container>
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
                                                        fieldGetError('city', 'PERSONAL_DETAILS.PLEASE_SELECT_CITY') ||
                                                        ''
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
                                            helperText={fieldGetError('street', 'PERSONAL_DETAILS.STREET') || ' '}
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
                                            helperText={fieldGetError('avenue', 'PERSONAL_DETAILS.AVENUE') || ' '}
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
                                <Grid container>
                                    <Grid item xs={12} sm={6}>
                                        <Submit type="submit" color="primary" disabled={!isValid} fullWidth>
                                            {t('PERSONAL_DETAILS.NEXT')}
                                        </Submit>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </StyledComp>
                    </AppForm>
                </Container>
            </Wrapper>
        </Layout1>
    );
};

export default PersonalDetails;
