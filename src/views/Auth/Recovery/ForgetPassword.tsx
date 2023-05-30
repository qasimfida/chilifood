import { SyntheticEvent, useCallback, useState } from 'react';
import { Grid, TextField, CardContent } from '@mui/material';
import { useTranslation } from 'react-i18next';
// Components
import { AppAlert, AppForm } from '../../../components';
import Layout1 from '../../../layout/Layout1';
// Utils and Hooks
import { useAppForm, SHARED_CONTROL_PROPS } from '../../../utils/form';
import { generateValidNumber } from '../../../utils/generateValidNumber';
import { appValidation } from '../../../utils/appValidation';
// Styles
import { Header, StyledComp, Submit, Title, Wrapper } from '../styles';

interface FormStateValues {
    phoneNumber: string;
}

const RecoveryPassword = () => {
    const { t } = useTranslation();
    const [message, setMessage] = useState<string>();
    const { recoverPassword } = appValidation(t);
    const [formState, , /* setFormState */ onFieldChange, fieldGetError, fieldHasError, onFieldBlur] = useAppForm({
        validationSchema: recoverPassword,
        initialValues: { phoneNumber: '' } as FormStateValues,
        validateOnBlur: true,
    });
    const values = formState.values as FormStateValues;

    const handleFormSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
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
