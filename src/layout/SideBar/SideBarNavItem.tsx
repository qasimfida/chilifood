import { FunctionComponent } from 'react';
import { ListItemIcon, ListItemText } from '@mui/material';
import { AppIcon } from '../../components';
import { LinkToPage } from '../../utils/type';
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
const SideBarNavItem: FunctionComponent<Props> = ({ icon, subtitle, title, onClick }) => {
    const { i18n } = useTranslation();

    return (
        <StyledItem dir={i18n.dir()} onClick={onClick}>
            <ListItemText primary={title} secondary={subtitle} />
            <ListItemIcon>{icon && <AppIcon icon={icon} />}</ListItemIcon>
        </StyledItem>
    );
};

export default SideBarNavItem;
