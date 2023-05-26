import { SyntheticEvent, useCallback, useState } from 'react';
import { Grid, TextField, CardContent } from '@mui/material';
import { AppAlert, AppForm } from '../../../components';
import { useAppForm, SHARED_CONTROL_PROPS } from '../../../utils/form';
import { Header, StyledComp, Submit, Title, Wrapper } from '../styles';
import { useTranslation } from 'react-i18next';
import Layout1 from '../../../layout/Layout1';
import { generateValidNumber } from '../../../utils/generateValidNumber';

interface FormStateValues {
    phoneNumber: string;
}

/**
 * Renders "Recover Password" view for Login flow
 * url: /uth/recovery/password
 * @param {string} [props.phoneNumber] - pre-populated phoneNumber in case the user already enters it
 */
const RecoveryPassword = () => {
    const { t } = useTranslation();
    const VALIDATE_FORM_RECOVERY_PASSWORD = {
        phoneNumber: {
            presence: true,
            type: 'string',
            format: {
                pattern: '[0-9]*', // Note: We have to allow empty in the pattern
                message: 'should contain numbers',
            },
            length: {
                minimum: 8,
                maximum: 8,
                message: t('PHONE_NUMBER_ERROR'),
            },
        },
    };
    const [formState, , /* setFormState */ onFieldChange, fieldGetError, fieldHasError, onFieldBlur] = useAppForm({
        validationSchema: VALIDATE_FORM_RECOVERY_PASSWORD,
        initialValues: { phoneNumber: '' } as FormStateValues,
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
        <Layout1 title={t('FORGET_PASSWORD_TITLE')} menuHeader>
            <Wrapper>
                <AppForm onSubmit={handleFormSubmit}>
                    <StyledComp>
                        <Header>
                            <Title variant="h6">{t('FORGET_PASSWORD')}</Title>
                        </Header>
                        <CardContent>
                            <TextField
                                required
                                type="tel"
                                label={t('PHONE_NUMBER')}
                                name="phoneNumber"
                                id="phoneNumber"
                                autoComplete="new-phone-number"
                                value={generateValidNumber(values.phoneNumber)}
                                error={fieldHasError('phoneNumber')}
                                helperText={fieldGetError('phoneNumber') || ' '}
                                onChange={onFieldChange}
                                onBlur={onFieldBlur}
                                inputProps={{ pattern: '[0-9]*', maxLength: 8, inputMode: 'numeric' }}
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
