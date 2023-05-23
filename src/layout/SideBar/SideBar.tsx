import { FunctionComponent } from 'react';
import { Stack, DrawerProps } from '@mui/material';
import { AppIconButton } from '../../components';
import { LinkToPage } from '../../utils/type';
import { useIsAuthenticated, useOnMobile } from '../../hooks';
import SideBarNavList from './SideBarNavList';
import { SIDEBAR_WIDTH, TOPBAR_DESKTOP_HEIGHT } from '../config';
import { useTranslation } from 'react-i18next';
import { Settings, StyledDrawer } from './styles';
import { useNavigate } from 'react-router-dom';

interface Props extends Pick<DrawerProps, 'anchor' | 'className' | 'open' | 'variant' | 'onClose'> {
    items: Array<LinkToPage>;
    onClick?: (e: LinkToPage) => void;
}

/**
 * Renders SideBar with Menu and User details
 * Actually for Authenticated users only, rendered in "Private Layout"
 * @component SideBar
 * @param {string} anchor - 'left' or 'right'
 * @param {boolean} open - the Drawer is visible when true
 * @param {string} variant - variant of the Drawer, one of 'permanent', 'persistent', 'temporary'
 * @param {function} onClose - called when the Drawer is closing
 */
const SideBar: FunctionComponent<Props> = ({ anchor, open, variant, items, onClick, onClose, ...restOfProps }) => {
    const { i18n } = useTranslation();
    const { isAuthenticated } = useIsAuthenticated();
    const onMobile = useOnMobile();

    // const handleAfterLinkClick = useCallback(
    //     (event: MouseEvent) => {
    //         if (variant === 'temporary' && typeof onClose === 'function') {
    //             onClose(event, 'backdropClick');
    //         }
    //     },
    //     [variant, onClose]
    // );
    const navigate = useNavigate();
    return (
        <StyledDrawer
            anchor={anchor}
            open={open}
            dir={i18n.dir()}
            variant={variant}
            PaperProps={{
                sx: {
                    width: SIDEBAR_WIDTH,
                    marginTop: onMobile ? 0 : variant === 'temporary' ? 0 : TOPBAR_DESKTOP_HEIGHT,
                    height: onMobile
                        ? '100%'
                        : variant === 'temporary'
                        ? '100%'
                        : `calc(100% - ${TOPBAR_DESKTOP_HEIGHT})`,
                },
            }}
            onClose={onClose}
        >
            <Stack
                sx={{
                    height: '100%',
                    paddingLeft: 2,
                    paddingRight: 2,
                    justifyContent: 'space-between',
                }}
                {...restOfProps}
            >
                <SideBarNavList items={items} showIcons onClick={onClick} />

                <Settings>
                    {isAuthenticated && (
                        <AppIconButton icon="settings" title="Settings" onClick={() => navigate('/settings')} />
                    )}
                </Settings>
            </Stack>
        </StyledDrawer>
    );
};

export default SideBar;
