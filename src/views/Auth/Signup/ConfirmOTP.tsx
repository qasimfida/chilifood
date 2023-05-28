import { useCallback, useState, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardContent, TextField, Grid, Button } from '@mui/material';
import { SHARED_CONTROL_PROPS } from '../../../utils/form';
import { AppAlert, AppForm } from '../../../components';
import { Description, Header, Link, StyledComp, StyledGrid, Submit, Title, Wrapper } from '../styles';
import Layout1 from '../../../layout/Layout1';
import { IUser } from '../../../hooks';
import { ObjectPropByName } from '../../../utils';
import { validate } from 'validate.js';
import { useTranslation } from 'react-i18next';
import { generateValidNumber } from '../../../utils/generateValidNumber';

interface FormStateValues {
    otp: number | undefined;
}

const ConfirmOTP = () => {
    const { t, i18n } = useTranslation();
    const validation = {
        otp: {
            presence: true,
            length: {
                minimum: 6,
                maximum: 6,
                message: t('OTP_ERROR'),
            },
        },
    };
    const [error, setError] = useState<string>();
    const [state, setState] = useState<FormStateValues>({
        otp: undefined,
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
        <Layout1 title={`${t('VERIFY')} OTP`}>
            <Wrapper>
                <AppForm onSubmit={handleFormSubmit}>
                    <StyledComp>
                        <Header>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Title variant="h6">{t('VERIFY')} OTP</Title>
                                </Grid>
                                <Grid item xs={12}>
                                    <Description>{t('OTP_MESSAGE')}</Description>
                                </Grid>
                            </Grid>
                        </Header>
                        <CardContent>
                            <TextField
                                required
                                label={t('ENTER_OTP')}
                                name="otp"
                                type="tel"
                                value={generateValidNumber(state.otp?.toString() || '')}
                                inputProps={{ pattern: '[0-9]*', maxLength: 6, inputMode: 'numeric' }}
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
                                {t('VERIFY')}
                            </Submit>
                            <StyledGrid container justifyContent="center" alignItems="center" dir={i18n.dir()}>
                                {t('DIDNT_RECIVED_OTP')}
                                <Link variant="text" color="primary">
                                    {t('RESEND_OTP')}
                                </Link>
                            </StyledGrid>
                            <Grid container justifyContent="center" alignItems="center">
                                <Button color="primary">{t('CONTACT_US')}</Button>
                            </Grid>
                        </CardContent>
                    </StyledComp>
                </AppForm>
            </Wrapper>
        </Layout1>
    );
};

export default ConfirmOTP;
