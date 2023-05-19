import { Container } from '@mui/material';
import { FunctionComponent, ReactNode } from 'react';
import { Header, Logo, StyledToolbar } from './styles';
import LogoIcon from './../../assets/logos/logo.png';

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
