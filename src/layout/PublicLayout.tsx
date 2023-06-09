import { FunctionComponent, PropsWithChildren, useCallback, useState } from 'react';
import { Stack } from '@mui/material/';
// import { useAppStore } from '../store/AppStore';
import { ErrorBoundary, AppIconButton } from '../components';
import { LinkToPage } from '../utils/type';
import { useOnMobile } from '../hooks/layout';
import { BOTTOMBAR_DESKTOP_VISIBLE, TOPBAR_DESKTOP_HEIGHT, TOPBAR_MOBILE_HEIGHT } from './config';
import { useEventSwitchDarkMode } from '../hooks/event';
import TopBar from './TopBar';
import SideBar from './SideBar';
import { PageWrapper } from './styles';

// TODO: change to your app name or other word
const TITLE_PUBLIC = 'Chili Food'; // Title for pages without/before authentication

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
 * BottomBar navigation items with links
 */
const BOTTOMBAR_ITEMS: Array<LinkToPage> = [
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
const PublicLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const onMobile = useOnMobile();
    const onSwitchDarkMode = useEventSwitchDarkMode();
    const [sideBarVisible, setSideBarVisible] = useState(false);
    // const [state] = useAppStore();
    const bottomBarVisible = onMobile || BOTTOMBAR_DESKTOP_VISIBLE;

    // Variant 1 - Sidebar is static on desktop and is a drawer on mobile
    // const sidebarOpen = onMobile ? sideBarVisible : true;
    // const sidebarVariant = onMobile ? 'temporary' : 'persistent';

    // Variant 2 - Sidebar is drawer on mobile and desktop
    const sidebarOpen = sideBarVisible;
    const sidebarVariant = 'temporary';

    const title = TITLE_PUBLIC;
    document.title = title; // Also Update Tab Title

    const onSideBarOpen = useCallback(() => {
        if (!sideBarVisible) setSideBarVisible(true); // Don't re-render Layout when SideBar is already open
    }, [sideBarVisible]);

    const onSideBarClose = useCallback(() => {
        if (sideBarVisible) setSideBarVisible(false); // Don't re-render Layout when SideBar is already closed
    }, [sideBarVisible]);

    // console.log(
    //   'Render using PublicLayout, onMobile:',
    //   onMobile,
    //   'sidebarOpen:',
    //   sidebarOpen,
    //   'sidebarVariant:',
    //   sidebarVariant
    // );

    return (
        <PageWrapper
            sx={{
                minHeight: '100vh', // Full screen height
                paddingTop: onMobile ? TOPBAR_MOBILE_HEIGHT : TOPBAR_DESKTOP_HEIGHT,
            }}
        >
            <Stack component="header">
                <TopBar
                    startNode={'Chili Foods'}
                    title={title}
                    endNode={<AppIconButton icon="logo" onClick={onSideBarOpen} />}
                />
                <SideBar
                    anchor="left"
                    open={sidebarOpen}
                    variant={sidebarVariant}
                    items={SIDEBAR_ITEMS}
                    onClose={onSideBarClose}
                />
            </Stack>

            <Stack component="main">
                <ErrorBoundary name="Content">{children}</ErrorBoundary>
            </Stack>
        </PageWrapper>
    );
};

export default PublicLayout;
