import { Box, Container, InputLabel, MenuItem, Select, createTheme, useTheme } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { FunctionComponent, PropsWithChildren, ReactNode, useCallback, useState } from 'react';
import { Stack } from '@mui/material/';
import { ErrorBoundary } from '../components';
import { LinkToPage } from '../utils/type';
import { useOnMobile } from '../hooks/layout';
import { TOPBAR_DESKTOP_HEIGHT, TOPBAR_MOBILE_HEIGHT } from './config';
import TopBar from './TopBar';
import SideBar from './SideBar';
import { useTranslation } from 'react-i18next';
import MenuIcon from '@mui/icons-material/Menu';
import { Content, Navigation, Title, PriceWrapper, Main, Flex, StyledFormControl, StyledButton } from './styles';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

// TODO: change to your app name or other word
const TITLE_PUBLIC = 'Chili Food'; // Title for pages without/before authentication

/**
 * SideBar navigation items with links
 */
const SIDEBAR_ITEMS: Array<LinkToPage> = [
    {
        title: 'Home',
        path: '/',
        icon: 'home',
    },
    {
        title: 'Language',
        path: '#',
        icon: 'language',
    },
    {
        title: 'About',
        path: '/about',
        icon: 'about',
    },
    {
        title: 'Terms and Conditions',
        path: '/terms',
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
        path: '#',
        icon: 'logout',
    },

    {
        title: '',
        path: '/setting',
        icon: 'settings',
    },
];

/**
 * Renders "Public Layout" composition
 */

interface IProps extends PropsWithChildren {
    title: ReactNode;
    isHome?: boolean;
    hasFooter?: boolean;
}
const Layout1: FunctionComponent<IProps> = ({ children, title, isHome, hasFooter }) => {
    const [value, setValue] = useState('1');

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };
    const handleDropDownChange = (event: any) => {
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
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    let theme = useTheme();
    const onClick = (lng: string) => {
        i18n.changeLanguage(lng === 'ar' ? 'en' : 'ar');
        console.log(i18n.dir());
        document.body.dir = i18n.dir();
        const updateTheme = createTheme({ ...theme, direction: i18n.dir() });
        theme = updateTheme;
    };
    const anchor = i18n.dir() === 'rtl' ? 'right' : 'left';
    const isLoggedInUser = false;
    const isInActiveUser = true;
    const sidebar_items = isLoggedInUser
        ? isInActiveUser
            ? [...SIDEBAR_ITEMS, ...AUTH_SIDEBAR_ITEMS]
            : [
                  ...SIDEBAR_ITEMS,
                  ...AUTH_SIDEBAR_ITEMS,
                  { title: 'Contact Restaurant', icon: 'contact', path: '/contact' },
              ]
        : [...SIDEBAR_ITEMS, { title: 'Login', icon: 'login' }, { title: 'Register', icon: 'register' }];
    return (
        <Stack
            sx={{
                minHeight: '100vh', // Full screen height
                paddingTop: onMobile ? TOPBAR_MOBILE_HEIGHT : TOPBAR_DESKTOP_HEIGHT,
            }}
        >
            {/* <TopBar
                startNode={title}
                onClick={() => onClick(i18n.language)}
            /> */}
            {isHome ? (
                <TopBar
                    startNode={
                        <Navigation dir={i18n.dir()}>
                            <MenuIcon className="pointer" onClick={onSideBarOpen} />
                            <Title>{title}</Title>
                        </Navigation>
                    }
                    onClick={() => onClick(i18n.language)}
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
                    onClick={() => onClick(i18n.language)}
                />
            )}

            <SideBar
                anchor={anchor}
                open={sidebarOpen}
                variant={sidebarVariant}
                items={sidebar_items}
                onClose={onSideBarClose}
            />

            <Main component="main">
                <Content>
                    <ErrorBoundary name="Content">{children}</ErrorBoundary>
                </Content>
                {isHome && <Footer />}

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
                                <StyledButton>Subscribe</StyledButton>
                            </Flex>
                        </Container>
                    </PriceWrapper>
                )}
            </Main>
        </Stack>
    );
};

export default Layout1;
