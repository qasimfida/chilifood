import { SyntheticEvent, useCallback, useState } from 'react';
import { Grid, TextField, Card, CardHeader, CardContent } from '@mui/material';
import { AppButton, AppAlert, AppForm } from '../../../components';
import { useAppForm, SHARED_CONTROL_PROPS } from '../../../utils/form';
import { Header, StyledComp, Submit, Title, Wrapper } from '../styles';

const VALIDATE_FORM_RECOVERY_PASSWORD = {
    number: {
        presence: true,
        type: 'string',
        format: {
            pattern: '^$|[- .+()0-9]+', // Note: We have to allow empty in the pattern
            message: 'should contain numbers',
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
    const [formState, , /* setFormState */ onFieldChange, fieldGetError, fieldHasError] = useAppForm({
        validationSchema: VALIDATE_FORM_RECOVERY_PASSWORD,
        initialValues: { number: '' } as FormStateValues,
    });
    const [message, setMessage] = useState<string>();
    const values = formState.values as FormStateValues; // Typed alias to formState.values as the "Source of Truth"

    const handleFormSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        // await api.auth.recoverPassword(values);

        //Show message with instructions for the user
        setMessage('OTP with instructions has been sent to your address');
    };

    const handleCloseError = useCallback(() => setMessage(undefined), []);

    return (
        <Wrapper>
            <AppForm onSubmit={handleFormSubmit}>
                <StyledComp>
                    <Header>
                        <Title variant="h6">Forgot Password</Title>
                    </Header>
                    <CardContent>
                        <TextField
                            required
                            label="Number"
                            name="number"
                            value={values.number}
                            error={fieldHasError('number')}
                            helperText={fieldGetError('number') || ' '}
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
                                Next
                            </Submit>
                        </Grid>
                    </CardContent>
                </StyledComp>
            </AppForm>
        </Wrapper>
    );
};

export default RecoveryPassword;
