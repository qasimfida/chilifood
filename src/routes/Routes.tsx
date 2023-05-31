import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Plan from '../views/Plan';
import Restaurant from '../views/Restaurant';
import { AboutView } from '../views/About';
import TermsPolicy from '../views/TermsPolicy';
import { useIsAuthenticated } from '../hooks';
import CheckOut from '../views/Checkout';
import Settings from '../views/Settings';
import Profile from '../views/Profile';
import PersonalDetails from '../views/PersonalDetails';
import AuthRoutes from '../views/Auth';

/**
 * Renders routes depending on Authenticated or Anonymous users
 */
const AppRoutes = () => {
    const location = useLocation();
    const { isAuthenticated } = useIsAuthenticated();
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

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chilifood" element={<Home />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="restaurants/:restaurant" element={<Restaurant />} />
            <Route path="restaurants/:restaurant/:plan" element={<Plan />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/terms-policy" element={<TermsPolicy />} />
            {isAuthenticated ? (
                <>
                    <Route path="/checkout" element={<CheckOut />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/select/restaurants/:restaurant/:plan" element={<Plan allowSelect />} />
                </>
            ) : (
                <>
                    <Route path="auth/*" element={<AuthRoutes />} />
                    <Route path="/personal-details" element={<PersonalDetails />} />
                </>
            )}
        </Routes>
    );
};
export default AppRoutes;
