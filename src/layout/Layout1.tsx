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
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

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
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const SIDEBAR_ITEMS: Array<LinkToPage> = [
        {
            title: 'Home',
            path: '/',
            icon: 'home',
        },
        {
            title: i18n.language === 'en' ? `Arabic(عربي)` : `English(إنجليزي)`,
            path: '',
            icon: 'language',
            key: 'language',
        },
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

    const AUTH_SIDEBAR_ITEMS = [
        {
            title: 'Profile',
            path: '/profile',
            icon: 'account',
        },
        {
            title: 'Contact admin',
            path: '/admin',
            icon: 'contact',
        },
        {
            title: 'Logout',
            path: '',
            icon: 'logout',
            key: 'logout',
        },
    ];

    const [value, setValue] = useState('1');
    const handleDropDownChange = (event: any) => {
        setValue(event.target.value)
        console.log('hello');
    };

    const onMobile = useOnMobile();
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

    // console.log(
    //   'Render using Layout1, onMobile:',
    //   onMobile,
    //   'sidebarOpen:',
    //   sidebarOpen,
    //   'sidebarVariant:',
    //   sidebarVariant
    // );

    let theme = useTheme();
    const onClick = (lng: string) => {
        i18n.changeLanguage(lng === 'ar' ? 'en' : 'ar');
        document.body.dir = i18n.dir();
        const updateTheme = createTheme({ ...theme, direction: i18n.dir() });
        theme = updateTheme;
    };
    const user: { userNumber?: string; password?: string } = JSON.parse(localStorage.getItem('user') || '{}');
    const anchor = i18n.dir() === 'rtl' ? 'right' : 'left';
    const isLoggedInUser = user?.userNumber ? true : false;
    const isInActiveUser = false;
    const sidebar_items = isLoggedInUser
        ? isInActiveUser
            ? [...SIDEBAR_ITEMS, ...AUTH_SIDEBAR_ITEMS]
            : [
                  ...SIDEBAR_ITEMS,
                  { title: 'Contact Restaurant', icon: 'contact', path: '/contact' },
                  ...AUTH_SIDEBAR_ITEMS,
              ]
        : [
              ...SIDEBAR_ITEMS,
              { title: 'Login', icon: 'login', path: '/auth/login' },
              { title: 'Register', icon: 'register', path: '/auth/signup' },
          ];

    const handleClick = (e: LinkToPage) => {
        if (e.path) {
            navigate(e.path);
        } else {
            if (e.key === 'language') {
                onClick(i18n.language);
            }
            // show model
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
                    {withFooter && <Footer />}
                </Content>

                {hasFooter && (
                    <PriceWrapper>
                        <Container>
                            <Flex>
                                <StyledFormControl size="small">
                                    <InputLabel id="my-select-label">Package</InputLabel>
                                    <Select
                                        labelId="my-select-label"
                                        id="my-select"
                                        value={value}
                                        onChange={handleDropDownChange}
                                    >
                                        <MenuItem value={1}>Option 1</MenuItem>
                                        <MenuItem value={2}>Option 2</MenuItem>
                                        <MenuItem value={3}>Option 3</MenuItem>
                                    </Select>
                                </StyledFormControl>
                                <StyledButton onClick={() => navigate('/checkout')}>Subscribe</StyledButton>
                            </Flex>
                        </Container>
                    </PriceWrapper>
                )}
            </Main>
            <StyledDialog
                open={open}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
                onClose={() => setOpen(false)}
            >
                <DialogTitle>{'Logout'}</DialogTitle>
                <DialogContent>
                    <Typography>Are you sure?</Typography>
                </DialogContent>
                <StyledActions>
                    <DialogButton size="small" variant="outlined" color="primary" onClick={() => setOpen(false)}>
                        Cancel
                    </DialogButton>
                    <DialogButton
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={handleLogout}
                        className="ml"
                    >
                        Logout
                    </DialogButton>
                </StyledActions>
            </StyledDialog>
        </PageWrapper>
    );
};

export default Layout1;
