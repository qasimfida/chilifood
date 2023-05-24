import PublicRoutes from './PublicRoutes';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { isUserStillLoggedIn } from '../api/auth/utils';
// import { api } from '../api';

/**
 * Renders routes depending on Authenticated or Anonymous users
 */
const Routes = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    // Re-login or logout the user if needed
    // useEffect(() => {
    //   // Check isn't token expired?
    //   const isLogged = isUserStillLoggedIn();

    //   if (isAuthenticated && !isLogged) {
    //     // Token was expired, logout immediately!
    //     console.warn('Token was expired, logout immediately!');
    //     api?.auth?.logout();
    //     // dispatch({ type: 'LOG_OUT' }); // Not needed due to reloading App in api.auth.logout()
    //     return; // Thats all for now, the App will be completely re-rendered soon
    //   }

    //   if (isLogged && !isAuthenticated) {
    //     // Valid token is present but we are not logged in somehow, lets fix it
    //     console.warn('Token found, lets try to auto login');
    //     api?.auth?.refresh().then(() => {
    //       dispatch({ type: 'LOG_IN' }); // Update global store only if token refresh was successful.
    //     });
    //   }
    // }, [isAuthenticated, dispatch]); // Effect for every isAuthenticated change actually

    return <PublicRoutes />;
};
export default Routes;