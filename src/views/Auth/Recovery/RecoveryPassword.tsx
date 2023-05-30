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
    const { recoverPassword } = appValidation(t);
    const [formState, , /* setFormState */ onFieldChange, fieldGetError, fieldHasError] = useAppForm({
        validationSchema: recoverPassword,
        initialValues: { password: '' } as FormStateValues,
    });
    const [message, setMessage] = useState<string>();
    const values = formState.values as FormStateValues; // Typed alias to formState.values as the "Source of Truth"

    const handleFormSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        // await api.auth.recoverPassword(values);

        //Show message with instructions for the user
        setMessage('Email with instructions has been sent to your address');
    };

    const handleCloseError = useCallback(() => setMessage(undefined), []);

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
                                value={values.password}
                                error={fieldHasError('password')}
                                helperText={fieldGetError('password') || ' '}
                                onChange={onFieldChange}
                                {...SHARED_CONTROL_PROPS}
                            />

                            {message ? (
                                <AppAlert severity="success" onClose={handleCloseError}>
                                    {message}
                                </AppAlert>
                            ) : null}

                            <Grid container justifyContent="center" alignItems="center">
                                <Submit type="submit" color="primary" disabled={!formState.isValid}>
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
