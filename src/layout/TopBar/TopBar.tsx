import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { FunctionComponent, ReactNode, useTransition } from 'react';
import { Header, Logo, StyledToolbar } from './styles';
import LogoIcon from './../../assets/logos/logo.png';
import { useTranslation } from 'react-i18next';

interface Props {
    endNode?: ReactNode;
    startNode?: ReactNode;
    title?: string;
    onClick?: () => void;
}

/**
 * Renders TopBar composition
 * @component TopBar
 */
const TopBar: FunctionComponent<Props> = ({ endNode, startNode, title = '', onClick, ...restOfProps }) => {
    const { i18n } = useTranslation();
    return (
        <Header {...restOfProps}>
            <Container>
                <StyledToolbar disableGutters>
                    {startNode}
                    <Logo onClick={onClick} src={LogoIcon} alt="logo" />
                </StyledToolbar>
            </Container>
        </Header>
    );
};

export default TopBar;
