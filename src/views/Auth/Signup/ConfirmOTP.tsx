import { useCallback, useState, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardContent, TextField, Grid, Button } from '@mui/material';
import { SHARED_CONTROL_PROPS, useAppForm } from '../../../utils/form';
import { AppAlert, AppForm } from '../../../components';
import { Description, Header, Link, StyledComp, Submit, Title, Wrapper } from '../styles';
import Layout1 from '../../../layout/Layout1';
import { IUser } from '../../../hooks';
// import { useAppStore } from '../../../store';

/**
 * Renders "Confirm Email" view for Signup flow
 * url: /auth/signup/confirm-otp
 */

interface FormStateValues {
    otp: string;
}
const VALIDATION = {
    otp: {
        presence: true,
        type: 'string',
        length: {
            minimum: 6,
            maximum: 10,
            message: 'Should be 6 - 10 characters.',
        },
    },
};

const ConfirmOTP = () => {
    const [error, setError] = useState<string>();
    const navigate = useNavigate();
    // const [, dispatch] = useAppStore();
    const [formState, , /* setFormState */ onFieldChange, fieldGetError, fieldHasError] = useAppForm({
        validationSchema: VALIDATION, // the state value, so could be changed in time
        initialValues: {
            otp: '',
        } as FormStateValues,
    });
    const values = formState.values as FormStateValues;

    const handleFormSubmit = useCallback(
        async (event: SyntheticEvent) => {
            event.preventDefault();
            const user: IUser = JSON.parse(localStorage.getItem('temp') || '{}');
            localStorage.removeItem('temp');
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/profile?id=0', { replace: true });
        },
        [navigate]
    );
    const handleCloseError = useCallback(() => setError(undefined), []);

    return (
        <Layout1 title="Verify OTP">
            <Wrapper>
                <AppForm onSubmit={handleFormSubmit}>
                    <StyledComp>
                        <Header>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Title variant="h6">Verify OTP</Title>
                                </Grid>
                                <Grid item xs={12}>
                                    <Description>
                                        We sent you an SMS message with OTP. Enter OTP number here to verify your mobile
                                        number
                                    </Description>
                                </Grid>
                            </Grid>
                        </Header>
                        <CardContent>
                            <TextField
                                required
                                label="OTP"
                                name="otp"
                                value={values.otp}
                                error={fieldHasError('otp')}
                                helperText={fieldGetError('otp') || ' '}
                                onChange={onFieldChange}
                                id="otp"
                                {...SHARED_CONTROL_PROPS}
                            />
                            {error ? (
                                <AppAlert severity="error" onClose={handleCloseError}>
                                    {error}
                                </AppAlert>
                            ) : null}
                            <Submit type="submit" color="primary" disabled={!formState.isValid} fullWidth>
                                Verify
                            </Submit>
                            <Grid container justifyContent="center" alignItems="center">
                                Don't recieved OTP yet?
                                <Link variant="text" color="primary">
                                    Resend OTP
                                </Link>
                            </Grid>
                            <Grid container justifyContent="center" alignItems="center">
                                <Button color="primary">Contact Us</Button>
                            </Grid>
                        </CardContent>
                    </StyledComp>
                </AppForm>
            </Wrapper>
        </Layout1>
    );
};

export default ConfirmOTP;
