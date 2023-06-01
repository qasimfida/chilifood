import { SyntheticEvent, useCallback, useState } from 'react';
import { Grid, TextField, CardContent } from '@mui/material';
import { useTranslation } from 'react-i18next';
// Components
import { AppAlert, AppForm } from '../../../components';
import Layout1 from '../../../layout/Layout1';
// Hooks and utils
import { useAppForm, SHARED_CONTROL_PROPS } from '../../../utils/form';
import { appValidation } from '../../../utils/appValidation';
// Styles
import { Header, Link, StyledComp, Submit, Title, Wrapper } from '../styles';
import validate from 'validate.js';
import { ObjectPropByName } from '../../../utils';
import { useNavigate } from 'react-router-dom';

interface FormStateValues {
    password: string;
}

/**
 * Renders "Recover Password" view for Login flow
 * url: /uth/recovery/password
 * @param {string} [props.password] - pre-populated password in case the user already enters it
 */
const RecoveryPassword = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { recoverPassword } = appValidation(t);
    const [message, setMessage] = useState<string>();
    const [state, setState] = useState<FormStateValues>({
        password: '',
    });
    const [errors, setErrors] = useState<any>({});

    const handleFormSubmit = useCallback(
        async (event: SyntheticEvent) => {
            event.preventDefault();
            navigate(`/`, { replace: true });
        },
        [navigate]
    );

    const handleCloseError = useCallback(() => setMessage(undefined), []);

    const onFieldBlur = (event: any) => {
        const { name, value } = event.target;
        const valid = (recoverPassword as ObjectPropByName)[name];
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
            password: t('PASSWORD_ERROR'),
        };
        return errorMessages[key] || (errors as ObjectPropByName)[key]?.[0] || '';
    };

    const fieldHasError = (key: any) => {
        return (errors as ObjectPropByName)[key] ? true : false;
    };

    const isValid = validate(state, recoverPassword) ? false : true;

    return (
        <Layout1 title={t('New_PASSWORD')} menuHeader>
            <Wrapper>
                <AppForm onSubmit={handleFormSubmit}>
                    <StyledComp>
                        <Header>
                            <Title variant="h6"> {t('New_PASSWORD')}</Title>
                        </Header>
                        <CardContent>
                            <TextField
                                required
                                label={t('New_PASSWORD')}
                                name="password"
                                autoComplete="new-phone-number"
                                value={state.password}
                                error={fieldHasError('password')}
                                helperText={fieldGetError('password') || ' '}
                                onChange={onFieldChange}
                                onBlur={onFieldBlur}
                                {...SHARED_CONTROL_PROPS}
                            />

                            {message ? (
                                <AppAlert severity="success" onClose={handleCloseError}>
                                    {message}
                                </AppAlert>
                            ) : null}

                            <Grid container justifyContent="center" alignItems="center">
                                <Submit type="submit" color="primary" disabled={!isValid}>
                                    {t('New_PASSWORD')}
                                </Submit>
                            </Grid>
                            <Grid container justifyContent="center" alignItems="center">
                                <Link>{t('CONTACT_US')}</Link>
                            </Grid>
                        </CardContent>
                    </StyledComp>
                </AppForm>
            </Wrapper>
        </Layout1>
    );
};

export default RecoveryPassword;
