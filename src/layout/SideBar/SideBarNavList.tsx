import { FunctionComponent, MouseEventHandler } from 'react';
import List from '@mui/material/List';
import SideBarNavItem from './SideBarNavItem';
import { LinkToPage } from '../../utils/type';
import { useTranslation } from 'react-i18next';
import { StyledList } from './styles';

interface Props {
    items: Array<LinkToPage>;
    showIcons?: boolean;
    onClick?: (e: LinkToPage) => void;
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
        <StyledList component="nav" {...restOfProps} dir={i18n.dir()}>
            {items.map((item) => (
                <SideBarNavItem
                    key={`${item.title}-${item.path}`}
                    icon={showIcons ? item.icon : undefined}
                    path={item.path}
                    title={item.title}
                    onClick={() => {
                        if (onClick) {
                            onClick(item);
                        }
                    }}
                />
            ))}
        </StyledList>
    );
};

export default SideBarNavList;
