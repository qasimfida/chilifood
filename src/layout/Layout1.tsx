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

// TODO: change to your app name or other word
const TITLE_PUBLIC = '_TITLE_ app'; // Title for pages without/before authentication

/**
 * SideBar navigation items with links
 */
const SIDEBAR_ITEMS: Array<LinkToPage> = [
    {
        title: 'Log In',
        path: '/auth/login',
        icon: 'login',
    },
    {
        title: 'Sign Up',
        path: '/auth/signup',
        icon: 'signup',
    },
    {
        title: 'About',
        path: '/about',
        icon: 'info',
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
    let theme = useTheme();
    const onClick = (lng: string) => {
        i18n.changeLanguage(lng === 'ar' ? 'en' : 'ar');
        console.log(i18n.dir());
        document.body.dir = i18n.dir();
        const updateTheme = createTheme({ ...theme, direction: i18n.dir() });
        theme = updateTheme;
    };
    const anchor = i18n.dir() === 'rtl' ? 'right' : 'left';

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
                                <ArrowBackIosIcon fontSize="small" className="pointer" />
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
                items={SIDEBAR_ITEMS}
                onClose={onSideBarClose}
            />

            <Main component="main">
                <Content>
                    <ErrorBoundary name="Content">{children}</ErrorBoundary>
                </Content>
                {hasFooter && (
                    <PriceWrapper>
                        <Container>
                            <Flex>
                                <StyledFormControl>
                                    <InputLabel id="my-select-label">Package</InputLabel>
                                    <Select
                                        style={{ height: 40 }}
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
