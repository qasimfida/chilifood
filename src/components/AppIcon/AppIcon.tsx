import { FunctionComponent } from 'react';
import { styled } from '@mui/material';
// SVG assets
import LogoIcon from './../../assets/logos/logo.png';
// Material Icons
import DefaultIcon from '@mui/icons-material/MoreHoriz';
import SettingsIcon from '@mui/icons-material/Settings';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DayNightIcon from '@mui/icons-material/Brightness4';
import NightIcon from '@mui/icons-material/Brightness3';
import DayIcon from '@mui/icons-material/Brightness5';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import {
    AddIcCall,
    AppRegistrationOutlined,
    Contacts,
    Description,
    Login,
    Logout,
    Rule,
    Translate,
    WhatsApp,
} from '@mui/icons-material';
const Logo = styled('img')`
    height: 44px;
    width: 44px;
    border-radius: 50%;
`;

/**
 * How to use:
 * 1. Import all required MUI or other SVG icons into this file.
 * 2. Add icons with "unique lowercase names" into ICONS object.
 * 3. Use icons everywhere in the App by their names in <AppIcon name="xxx" /> component
 * Important: properties of ICONS object MUST be lowercase!
 * Note: You can use camelCase or UPPERCASE in the <AppIcon name="someIconByName" /> component
 */
const ICONS: Record<string, React.ComponentType> = {
    default: DefaultIcon,
    logo: () => <Logo src={LogoIcon} alt="logo" />,
    close: CloseIcon,
    menu: MenuIcon,
    settings: SettingsIcon,
    visibilityon: VisibilityIcon,
    visibilityoff: VisibilityOffIcon,
    daynight: DayNightIcon,
    night: NightIcon,
    day: DayIcon,
    search: SearchIcon,
    info: InfoIcon,
    home: HomeIcon,
    account: AccountCircle,
    signup: PersonAddIcon,
    login: Login,
    logout: Logout,
    notifications: NotificationsIcon,
    language: Translate,
    about: InfoIcon,
    register: AppRegistrationOutlined,
    contact: AddIcCall,
    terms: Description,
    whatsapp: WhatsApp,
    contacts: Contacts,
    rule: Rule,
};

interface Props {
    name?: string; // Icon's name
    icon?: string; // Icon's name alternate prop
}

/**
 * Renders SVG icon by given Icon name
 * @component AppIcon
 * @param {string} [props.name] - name of the Icon to render
 * @param {string} [props.icon] - name of the Icon to render
 */
const AppIcon: FunctionComponent<Props> = ({ name, icon, ...restOfProps }) => {
    const iconName = (name || icon || 'default').trim().toLowerCase();
    const ComponentToRender = ICONS[iconName] || DefaultIcon;
    return <ComponentToRender {...restOfProps} />;
};

export default AppIcon;
