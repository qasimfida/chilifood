import { FunctionComponent, MouseEventHandler } from 'react';
import List from '@mui/material/List';
import SideBarNavItem from './SideBarNavItem';
import { LinkToPage } from '../../utils/type';
import { useTranslation } from 'react-i18next';

interface Props {
    items: Array<LinkToPage>;
    showIcons?: boolean;
    onClick?: MouseEventHandler;
}

/**
 * Renders list of Navigation Items inside SideBar
 * @component SideBarNavList
 * @param {array} items - list of objects to render as navigation items
 * @param {boolean} [showIcons] - icons in navigation items are visible when true
 * @param {function} [onAfterLinkClick] - optional callback called when some navigation item was clicked
 */
const SideBarNavList: FunctionComponent<Props> = ({ items, showIcons, onClick, ...restOfProps }) => {
    const { i18n } = useTranslation();
    return (
        <List component="nav" {...restOfProps} dir={i18n.dir()}>
            {items.map(({ icon, path, title }) => (
                <SideBarNavItem
                    key={`${title}-${path}`}
                    icon={showIcons ? icon : undefined}
                    path={path}
                    title={title}
                    onClick={onClick}
                />
            ))}
        </List>
    );
};

export default SideBarNavList;
