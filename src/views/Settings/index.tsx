import * as React from 'react';
import { Button, Container, DialogContent, DialogTitle, Grid, Typography, createTheme, useTheme } from '@mui/material';
import Layout1 from '../../layout/Layout1';
import { DialogButton, StyledActions, StyledDialogs, Wrapper } from './styles';
import { useTranslation } from 'react-i18next';
import { AppButton } from '../../components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Settings: React.FC<any> = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();

    let theme = useTheme();
    const onClick = (lng: string) => {
        i18n.changeLanguage(lng === 'ar' ? 'en' : 'ar');
        document.body.dir = i18n.dir();
        const updateTheme = createTheme({ ...theme, direction: i18n.dir() });
        theme = updateTheme;
    };
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    const deleteAccount = () => {
        navigate('/');
    };

    return (
        <Layout1 title={'Settings'}>
            <Wrapper dir={i18n.dir()}>
                <Container>
                    <Grid container spacing={0}>
                        <Grid container item xs={12} justifyContent="flex-start" mt={4}>
                            <AppButton variant="text" onClick={() => onClick(i18n.language)}>
                                {i18n.language === 'en' ? `Arabic(عربي)` : `English(إنجليزي)`}
                            </AppButton>
                        </Grid>
                        <Grid container item xs={12} justifyContent="flex-start">
                            <AppButton variant="text" color="error" onClick={handleClick}>
                                Delete(Account)
                            </AppButton>
                        </Grid>
                    </Grid>
                    <StyledDialogs
                        open={open}
                        keepMounted
                        aria-describedby="alert-dialog-slide-description"
                        onClose={() => setOpen(false)}
                    >
                        <DialogTitle>{'Delete Account'}</DialogTitle>
                        <DialogContent>
                            <Typography>Are you sure that you Want to Delete your Account?</Typography>
                        </DialogContent>
                        <StyledActions>
                            <DialogButton size="small" variant="outlined" onClick={() => setOpen(false)}>
                                Cancel
                            </DialogButton>
                            <Button size="small" variant="outlined" color="error" onClick={deleteAccount}>
                                Yes
                            </Button>
                        </StyledActions>
                    </StyledDialogs>
                </Container>
            </Wrapper>
        </Layout1>
    );
};

export default Settings;
