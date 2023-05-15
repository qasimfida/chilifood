import { FunctionComponent, MouseEventHandler } from 'react';
import { ListItemIcon, ListItemText } from '@mui/material';
import { AppIcon, AppLink } from '../../components';
import { LinkToPage } from '../../utils/type';
import { useLocation } from 'react-router';
import { StyledItem } from './styles';
import { useTranslation } from 'react-i18next';

interface Props extends LinkToPage {
    openInNewTab?: boolean;
    selected?: boolean;
    onClick?: (e: LinkToPage) => void;
}

/**
 * Renders Navigation Item for SideBar, detects current url and sets selected state if needed
 * @component SideBarNavItem
 */
const SideBarNavItem: FunctionComponent<Props> = ({
    openInNewTab,
    icon,
    path,
    selected: propSelected = false,
    subtitle,
    title,
    onClick,
}) => {
    const location = useLocation();
    const { i18n } = useTranslation();
    const selected = propSelected || (path && path.length > 1 && location.pathname.startsWith(path)) || false;

    return (
        <StyledItem dir={i18n.dir()} onClick={onClick}>
            <ListItemText primary={title} secondary={subtitle} />
            <ListItemIcon>{icon && <AppIcon icon={icon} />}</ListItemIcon>
        </StyledItem>
    );
};

export default SideBarNavItem;
