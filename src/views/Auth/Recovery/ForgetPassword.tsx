import { SyntheticEvent, useCallback, useState } from 'react';
import { Grid, TextField, CardContent } from '@mui/material';
import { AppAlert, AppForm } from '../../../components';
import { useAppForm, SHARED_CONTROL_PROPS } from '../../../utils/form';
import { Header, StyledComp, Submit, Title, Wrapper } from '../styles';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import Layout1 from '../../../layout/Layout1';

const VALIDATE_FORM_RECOVERY_PASSWORD = {
    number: {
        presence: true,
        type: 'string',
        format: {
            pattern: '^$|[- .+()0-9]+', // Note: We have to allow empty in the pattern
            message: 'should contain numbers',
        },
        length: {
            minimum: 8,
            maximum: 8,
            message: 'numbers only, max 8 characters',
        },
    },
};

interface FormStateValues {
    number: string;
}

interface Props {
    number?: string;
}

/**
 * Renders "Recover Password" view for Login flow
 * url: /uth/recovery/password
 * @param {string} [props.number] - pre-populated number in case the user already enters it
 */
const RecoveryPassword = () => {
    const { t } = useTranslation();
    const [formState, , /* setFormState */ onFieldChange, fieldGetError, fieldHasError, onFieldBlur] = useAppForm({
        validationSchema: VALIDATE_FORM_RECOVERY_PASSWORD,
        initialValues: { number: '' } as FormStateValues,
        validateOnBlur: true,
    });
    const [message, setMessage] = useState<string>();
    const values = formState.values as FormStateValues; // Typed alias to formState.values as the "Source of Truth"

    const handleFormSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        // await api.auth.recoverPassword(values);

        //Show message with instructions for the user
        const otpMessage = t('OTP_MESSAGE');
        setMessage(otpMessage);
    };

    const handleCloseError = useCallback(() => setMessage(undefined), []);

    return (
        <Layout1 title="Forgot Password" menuHeader withFooter>
            <Wrapper>
                <AppForm onSubmit={handleFormSubmit}>
                    <StyledComp>
                        <Header>
                            <Title variant="h6">{t('FORGET_PASSWORD')}</Title>
                        </Header>
                        <CardContent>
                            <TextField
                                required
                                label={t('PHONE_NUMBER')}
                                name="number"
                                value={values.number}
                                error={fieldHasError('number')}
                                helperText={fieldGetError('number') || ' '}
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
                                <Submit type="submit" color="primary" disabled={!formState.isValid}>
                                    {t('NEXT')}
                                </Submit>
                            </Grid>
                        </CardContent>
                    </StyledComp>
                </AppForm>
            </Wrapper>
        </Layout1>
    );
};

export default RecoveryPassword;
