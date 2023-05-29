import {
    Box,
    Container,
    DialogContent,
    DialogTitle,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    createTheme,
    useTheme,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { FunctionComponent, PropsWithChildren, ReactNode, useCallback, useState } from 'react';
import { ErrorBoundary } from '../components';
import { LinkToPage } from '../utils/type';
import { useOnMobile } from '../hooks/layout';
import { TOPBAR_DESKTOP_HEIGHT, TOPBAR_MOBILE_HEIGHT } from './config';
import TopBar from './TopBar';
import SideBar from './SideBar';
import { useTranslation } from 'react-i18next';
import MenuIcon from '@mui/icons-material/Menu';
import {
    Content,
    Navigation,
    Title,
    PriceWrapper,
    Main,
    Flex,
    StyledFormControl,
    StyledButton,
    PageWrapper,
    DialogButton,
    StyledActions,
    StyledDialog,
} from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import { useIsAuthenticated } from '../hooks';

/**
 * SideBar navigation items with links
 */

/**
 * Renders "Public Layout" composition
 */

interface IProps extends PropsWithChildren {
    title: ReactNode;
    hasFooter?: boolean;
    menuHeader?: boolean;
    withFooter?: boolean;
}
const Layout1: FunctionComponent<IProps> = ({ children, title, hasFooter, menuHeader, withFooter }) => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const params = useParams();
    const { plan, restaurant } = params;
    const SIDEBAR_ITEMS: Array<LinkToPage> = [
        {
            title: 'HOME_RESTAURANTS',
            path: '/',
            icon: 'home',
        },
        {
            title: 'LANGUAGE',
            path: '',
            icon: 'language',
            key: 'language',
        },
    ];

    const AUTH_SIDEBAR_ITEMS = [
        {
            title: 'SELECT_FOOD',
            path: '/select/restaurants/1/1',
            icon: 'rule',
        },
        {
            title: 'Profile',
            path: '/profile?id=1',
            icon: 'account',
        },
        { title: 'Contact Restaurant', icon: 'whatsapp', path: '/contact' },
        // {
        //     title: 'Contact admin',
        //     path: '/admin',
        //     icon: 'whatsapp',
        // },
        { title: 'Contact us', path: '/contact', icon: 'whatsapp' },
        {
            title: 'About',
            path: '/about',
            icon: 'about',
        },
        {
            title: 'Terms and Conditions',
            path: '/terms-policy',
            icon: 'terms',
        },
        {
            title: 'Logout',
            path: '',
            icon: 'logout',
            key: 'logout',
        },
    ];

    const [value, setValue] = useState(0);
    const handleDropDownChange = (event: any) => {
        setValue(event.target.value);
    };

    const onMobile = useOnMobile();
    const { isAuthenticated } = useIsAuthenticated();
    const [sideBarVisible, setSideBarVisible] = useState(false);

    // Variant 1 - Sidebar is static on desktop and is a drawer on mobile
    // const sidebarOpen = onMobile ? sideBarVisible : true;
    // const sidebarVariant = onMobile ? 'temporary' : 'persistent';

    // Variant 2 - Sidebar is drawer on mobile and desktop
    const sidebarOpen = sideBarVisible;
    const sidebarVariant = 'temporary';

    const onSideBarOpen = useCallback(() => {
        if (!sideBarVisible) setSideBarVisible(true); // Don't re-render Layout when SideBar is already open
    }, [sideBarVisible]);

    const onSideBarClose = useCallback(() => {
        if (sideBarVisible) setSideBarVisible(false); // Don't re-render Layout when SideBar is already closed
    }, [sideBarVisible]);

    let theme = useTheme();
    const onClick = (lng: string) => {
        i18n.changeLanguage(lng === 'ar' ? 'en' : 'ar');
        document.body.dir = i18n.dir();
        const updateTheme = createTheme({ ...theme, direction: i18n.dir() });
        theme = updateTheme;
    };
    const anchor = i18n.dir() === 'rtl' ? 'right' : 'left';

    const isInActiveUser = false;
    const sidebar_items = isAuthenticated
        ? isInActiveUser
            ? [...SIDEBAR_ITEMS, ...AUTH_SIDEBAR_ITEMS]
            : [...SIDEBAR_ITEMS, ...AUTH_SIDEBAR_ITEMS]
        : [
              ...SIDEBAR_ITEMS,
              { title: 'Register', icon: 'register', path: '/personal-details' },
              { title: 'Login', icon: 'login', path: '/auth/login' },
              { title: 'Contact us', path: '/contact', icon: 'whatsapp' },
              {
                  title: 'About',
                  path: '/about',
                  icon: 'about',
              },
              {
                  title: 'Terms and Conditions',
                  path: '/terms-policy',
                  icon: 'terms',
              },
          ];

    const handleClick = (e: LinkToPage) => {
        if (e.path) {
            navigate(e.path);
        } else {
            if (e.key === 'language') {
                onClick(i18n.language);
            }
            // Show dialog if e.key is 'logout'
            if (e.key === 'logout') {
                setOpen(true); // Set the state to open the dialog
            }
        }
        onSideBarClose();
    };
    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
        setOpen(false); // Close the dialog after logout
    };

    const handleSubscribe = () => {
        localStorage.setItem('plan', plan || '');
        localStorage.setItem('restaurant', restaurant || '');
        navigate(isAuthenticated ? '/checkout' : '/personal-details?redirect=checkout');
    };

    const options = [
        { label: '210 Kd, 28 days (without off)', value: 0, name: '210 kd, 28 days' },
        { label: '195 Kd, 24 days (Frid off)', value: 1, name: '195 Kd, 24 days' },
        { label: '170 Kd, 28 days (Frid, Sat off)', value: 2, name: '170 Kd, 28 days' },
    ];
    return (
        <PageWrapper
            sx={{
                minHeight: '100vh', // Full screen height
                paddingTop: onMobile ? TOPBAR_MOBILE_HEIGHT : TOPBAR_DESKTOP_HEIGHT,
            }}
        >
            {menuHeader ? (
                <TopBar
                    startNode={
                        <Navigation dir={i18n.dir()}>
                            <MenuIcon className="pointer" onClick={onSideBarOpen} />
                            <Title>{title}</Title>
                        </Navigation>
                    }
                    onClick={() => navigate('/')}
                />
            ) : (
                <TopBar
                    startNode={
                        <Box>
                            <Navigation dir={i18n.dir()}>
                                <ArrowBackIosIcon fontSize="small" className="pointer" onClick={() => navigate(-1)} />
                                <Title>{title}</Title>
                            </Navigation>
                        </Box>
                    }
                    onClick={() => navigate('/')}
                />
            )}
            <SideBar
                anchor={anchor}
                open={sidebarOpen}
                variant={sidebarVariant}
                items={sidebar_items}
                onClose={onSideBarClose}
                onClick={handleClick}
            />
            <Main component="main">
                <Content>
                    <ErrorBoundary name="Content">{children}</ErrorBoundary>
                    {(menuHeader || withFooter) && <Footer />}
                </Content>

                {hasFooter && (
                    <PriceWrapper>
                        <Container>
                            <Flex dir={i18n.dir()}>
                                <StyledFormControl>
                                    <InputLabel id="my-select-label">{t('PACKAGE')}</InputLabel>
                                    <Select
                                        labelId="my-select-label"
                                        id="my-select"
                                        value={value}
                                        onChange={handleDropDownChange}
                                        renderValue={(select: number) => {
                                            const option = options[select];
                                            return option.name;
                                        }}
                                    >
                                        {options.map((option) => {
                                            return (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                </StyledFormControl>
                                <StyledButton variant="contained" color="primary" onClick={handleSubscribe}>
                                    {t('SUBSCRIBE')}
                                </StyledButton>
                            </Flex>
                        </Container>
                    </PriceWrapper>
                )}
            </Main>
            <StyledDialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>{t('LOGOUT')}</DialogTitle>
                <DialogContent>
                    <Typography>{t('ARE_YOU_SURE')}</Typography>
                </DialogContent>
                <StyledActions>
                    <DialogButton size="small" variant="outlined" onClick={() => setOpen(false)}>
                        {t('CANCEL')}
                    </DialogButton>
                    <DialogButton size="small" variant="outlined" color="primary" onClick={handleLogout} className="ml">
                        {t('LOGOUT')}
                    </DialogButton>
                </StyledActions>
            </StyledDialog>
        </PageWrapper>
    );
};

export default Layout1;
