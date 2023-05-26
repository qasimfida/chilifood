import { useCallback, useState, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardContent, TextField, Grid, Button } from '@mui/material';
import { SHARED_CONTROL_PROPS, useAppForm } from '../../../utils/form';
import { AppAlert, AppForm } from '../../../components';
import { Description, Header, Link, StyledComp, Submit, Title, Wrapper } from '../styles';
import Layout1 from '../../../layout/Layout1';
import { IUser } from '../../../hooks';
import { ObjectPropByName } from '../../../utils';
import { validate } from 'validate.js';
// import { useAppStore } from '../../../store';

/**
 * Renders "Confirm Email" view for Signup flow
 * url: /auth/signup/confirm-otp
 */

interface FormStateValues {
    otp: string;
}

const ConfirmOTP = () => {
    const validation = {
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
    const [error, setError] = useState<string>();
    const [state, setState] = useState<FormStateValues>({
        otp: '',
    });
    const [errors, setErrors] = useState<any>({});
    const navigate = useNavigate();
    // const [, dispatch] = useAppStore();
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
    const onFieldChange = (event: any) => {
        const { name, value } = event.target;
        const limit = (validation as ObjectPropByName)[name]?.length?.maximum;
        if (value?.length <= limit) {
            setState((prev) => {
                return { ...prev, [name]: value };
            });
        }
    };
    const fieldGetError = (key: any) => {
        return (errors as ObjectPropByName)[key]?.[0];
    };
    const fieldHasError = (key: any) => {
        return (errors as ObjectPropByName)[key] ? true : false;
    };
    const isValid = validate(state, validation) ? false : true;

    const handleFormSubmit = useCallback(
        async (event: SyntheticEvent) => {
            event.preventDefault();
            const user: IUser = JSON.parse(localStorage.getItem('temp') || '{}');
            localStorage.removeItem('temp');
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/', { replace: true });
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
                                value={state.otp}
                                error={fieldHasError('otp')}
                                helperText={fieldGetError('otp') || ' '}
                                onChange={onFieldChange}
                                onBlur={onFieldBlur}
                                id="otp"
                                {...SHARED_CONTROL_PROPS}
                            />
                            {error ? (
                                <AppAlert severity="error" onClose={handleCloseError}>
                                    {error}
                                </AppAlert>
                            ) : null}
                            <Submit type="submit" color="primary" disabled={!isValid} fullWidth>
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
