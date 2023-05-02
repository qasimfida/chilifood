import { FunctionComponent, PropsWithChildren } from 'react';
import { useIsAuthenticated } from '../hooks/auth';
import PrivateLayout from './PrivateLayout';
import PublicLayout from './PublicLayout';

const CurrentLayout: FunctionComponent<PropsWithChildren> = (props) => {
    return useIsAuthenticated() ? <PrivateLayout {...props} /> : <PublicLayout {...props} />;
};

export default CurrentLayout;
