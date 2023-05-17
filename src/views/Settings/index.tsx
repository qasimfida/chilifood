import * as React from 'react';
import { useState } from 'react';
import {
    Container,
    FormControl,
    Grid,
    InputLabel,
    Link,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    createTheme,
    useTheme,
} from '@mui/material';
import Layout1 from '../../layout/Layout1';
import { PayButton, TextArea, Title, Wrapper } from './styles';
import { useTranslation } from 'react-i18next';
import { AppButton } from '../../components';

const Settings: React.FC<any> = () => {
    const [value, setValue] = useState<any>('1');
    const { i18n } = useTranslation();

    let theme = useTheme();
    const onClick = (lng: string) => {
        i18n.changeLanguage(lng === 'ar' ? 'en' : 'ar');
        document.body.dir = i18n.dir();
        const updateTheme = createTheme({ ...theme, direction: i18n.dir() });
        theme = updateTheme;
    };

    return (
        <Layout1 title={'Settings'} withFooter>
            <Wrapper dir={i18n.dir()}>
                <Container>
                    <Grid container spacing={0}>
                        <Grid container item xs={12} justifyContent="flex-start" mt={4}>
                            <AppButton variant="text" onClick={() => onClick(i18n.language)}>
                                {i18n.language === 'en' ? `Arabic(عربي)` : `English(إنجليزي)`}
                            </AppButton>
                        </Grid>
                        <Grid container item xs={12} justifyContent="flex-start">
                            <AppButton variant="text">Delete(Account)</AppButton>
                        </Grid>
                    </Grid>
                </Container>
            </Wrapper>
        </Layout1>
    );
};

export default Settings;
