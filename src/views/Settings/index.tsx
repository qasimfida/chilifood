import * as React from 'react';
import { Button, Container, DialogTitle, Grid, TextField, Typography, createTheme, useTheme } from '@mui/material';
import Layout1 from '../../layout/Layout1';
import { Content, DialogButton, StyledActions, StyledDialogs, Wrapper } from './styles';
import { useTranslation } from 'react-i18next';
import { AppButton } from '../../components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useIsAuthenticated } from '../../hooks';

const Settings: React.FC<any> = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const user = useIsAuthenticated();

    let theme = useTheme();
    const onClick = (lng: string) => {
        i18n.changeLanguage(lng === 'ar' ? 'en' : 'ar');
        document.body.dir = i18n.dir();
        const updateTheme = createTheme({ ...theme, direction: i18n.dir() });
        theme = updateTheme;
    };
    const [open, setOpen] = useState<boolean>(false);
    const [deletePopup, setDeletePopup] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const handleClick = () => {
        setOpen(true);
    };
    const isValid = password.length > 2;
    const deleteAccount = () => {
        if (isValid && password === user?.password) {
            localStorage.removeItem('user');
            navigate('/');
        }
    };
    return (
        <Layout1 title={t('SETTING')}>
            <Wrapper dir={i18n.dir()}>
                <Container>
                    <Grid container spacing={0}>
                        <Grid container item xs={12} justifyContent="flex-start" mt={4}>
                            <AppButton variant="text" onClick={() => onClick(i18n.language)}>
                                {t('LANGUAGE')}
                            </AppButton>
                        </Grid>
                        <Grid container item xs={12} justifyContent="flex-start">
                            <AppButton variant="text" color="error" onClick={handleClick}>
                                {t('DELETE_ACCOUNT')}
                            </AppButton>
                        </Grid>
                    </Grid>
                    <StyledDialogs
                        open={open}
                        keepMounted
                        aria-describedby="alert-dialog-slide-description"
                        onClose={() => setOpen(false)}
                    >
                        <DialogTitle>{t('DELETE_ACCOUNT')}</DialogTitle>
                        <Content>
                            <Typography>{t('DELETE_POPUP')}</Typography>
                        </Content>
                        <StyledActions dir={i18n.dir()}>
                            <DialogButton size="small" variant="outlined" onClick={() => setOpen(false)}>
                                {t('DELETE_REJECT')}
                            </DialogButton>
                            <Button size="small" variant="outlined" color="error" onClick={() => setDeletePopup(true)}>
                                {t('DELETE_CONFIRM')}
                            </Button>
                        </StyledActions>
                    </StyledDialogs>
                    <StyledDialogs
                        open={deletePopup}
                        keepMounted
                        aria-describedby="alert-dialog-slide-description"
                        onClose={() => setDeletePopup(false)}
                    >
                        <DialogTitle>{t('DELETE_ACCOUNT_CONFIRMATION')}</DialogTitle>
                        <Content>
                            <TextField
                                size="small"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                label={t('PASSWORD')}
                                placeholder="Enter your password"
                                fullWidth
                            />
                        </Content>
                        <StyledActions>
                            <DialogButton size="small" variant="outlined" onClick={() => setDeletePopup(false)}>
                                {t('DELETE_REJECT')}
                            </DialogButton>
                            <Button size="small" variant="outlined" color="error" onClick={deleteAccount}>
                                {t('DELETE')}
                            </Button>
                        </StyledActions>
                    </StyledDialogs>
                </Container>
            </Wrapper>
        </Layout1>
    );
};

export default Settings;
