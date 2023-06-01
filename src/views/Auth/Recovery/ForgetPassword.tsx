import { SyntheticEvent, useCallback, useState } from 'react';
import { Grid, TextField, CardContent } from '@mui/material';
import { useTranslation } from 'react-i18next';
// Components
import { AppAlert, AppForm } from '../../../components';
import Layout1 from '../../../layout/Layout1';
// Utils and Hooks
import { SHARED_CONTROL_PROPS } from '../../../utils/form';
import { generateValidNumber } from '../../../utils/generateValidNumber';
import { appValidation } from '../../../utils/appValidation';
// Styles
import { Header, StyledComp, Submit, Title, Wrapper } from '../styles';
import { useNavigate } from 'react-router-dom';
import { validate } from 'validate.js';
import { ObjectPropByName } from '../../../utils';

interface FormStateValues {
    phoneNumber: string;
}

const RecoveryPassword = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { forgetPassword } = appValidation(t);

    const [message, setMessage] = useState<string>();
    const [errors, setErrors] = useState<any>({});
    const [state, setState] = useState<FormStateValues>({
        phoneNumber: '',
    });

    const handleFormSubmit = useCallback(
        async (event: SyntheticEvent) => {
            event.preventDefault();
            localStorage.setItem('number', state.phoneNumber);
            navigate(`/auth/signup/confirm-otp?redirect=auth/recovery/change`, { replace: true });
        },
        [navigate, state]
    );

    const handleCloseError = useCallback(() => setMessage(undefined), []);

    const onFieldBlur = (event: any) => {
        const { name, value } = event.target;
        const valid = (forgetPassword as ObjectPropByName)[name];
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
            phoneNumber: t('PHONE_NUMBER_ERROR'),
        };
        return errorMessages[key] || (errors as ObjectPropByName)[key]?.[0] || '';
    };

    const fieldHasError = (key: any) => {
        return (errors as ObjectPropByName)[key] ? true : false;
    };

    const isValid = validate(state, forgetPassword) ? false : true;
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
                                value={generateValidNumber(state.phoneNumber)}
                                error={fieldHasError('phoneNumber')}
                                helperText={fieldGetError('phoneNumber') || ''}
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
                                <Submit type="submit" variant="contained" color="primary" disabled={!isValid}>
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
