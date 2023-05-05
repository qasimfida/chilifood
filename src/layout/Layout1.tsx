import {
    Box,
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Tab,
    createTheme,
    css,
    styled,
    useTheme,
} from '@mui/material';
import { FunctionComponent, PropsWithChildren, ReactNode, useCallback, useState } from 'react';
import { Stack } from '@mui/material/';
import { ErrorBoundary, AppIconButton } from '../components';
import { LinkToPage } from '../utils/type';
import { useOnMobile } from '../hooks/layout';
import { BOTTOMBAR_DESKTOP_VISIBLE, TOPBAR_DESKTOP_HEIGHT, TOPBAR_MOBILE_HEIGHT } from './config';
import { useEventSwitchDarkMode } from '../hooks/event';
import TopBar from './TopBar';
import SideBar from './SideBar';
import BottomBar from './BottomBar';
import { useTranslation } from 'react-i18next';

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
}
const Layout1: FunctionComponent<IProps> = ({ children, title }) => {
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
            <TopBar startNode={<Box onClick={onSideBarOpen}>{title}</Box>} onClick={() => onClick(i18n.language)} />

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
            </Main>
        </Stack>
    );
};

export default Layout1;

export const Main = styled(Stack)<any>`
    min-height: calc(100vh - 64px);
    height: auto;
    position: relative;
`;
export const Content = styled(Box)<any>`
    min-height: calc(100vh - 64px);
    height: auto;
`;

export const PriceWrapper = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    bottom: 0;
    width: 100%;
    height: 68px;
    min-height: 68px;
    max-width: 100%;
    ${({ theme: { palette } }: any) => css`
        border-top: 1px solid ${palette.secondary.light};
        background: ${palette.primary.light};
        & label {
            background: ${palette.primary.light};
            color: ${palette.primary.main};

            &.Mui-focused {
                color: ${palette.primary.main};
            }
        }
    `}
`;
export const StyledTab = styled(Tab)`
    ${({ theme: { palette } }: any) => css`
        color: ${palette.secondary.dark};
        &.Mui-selected {
            border-radius: 5px;
            font-weight: bold;
            color: ${palette.primary.main};
        }
    `}
`;
export const StyledFormControl = styled(FormControl)`
    width: 150px;
    min-width: 120;
    fieldset {
        border: 1px solid ${({ theme: { palette } }: any) => palette.primary.main};
    }
`;

export const StyledButton = styled(Button)`
    ${({ theme: { palette } }: any) => css`
        background: ${palette.primary.light};
        color: #000;
        padding: 0px 20px;
        border: 1px solid ${palette.primary.main};
        height: 40px;
        &:hover {
            background: ${palette.primary.main};
            color: #fff;
        }
    `}
`;
export const Flex = styled(Box)`
    display: flex;
    justify-content: space-between;
`;
