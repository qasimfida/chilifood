import { Route, Routes } from 'react-router-dom';
// import { NotFoundView, UserView } from '../views';
// import AboutView from '../views/About';
// import { WelcomeView } from '../views/Welcome';
import Plan from '../views/Plan';
import Home from '../views/Home';
import Restaurant from '../views/Restaurant';
import CheckOut from '../views/Checkout';
import AuthRoutes from '../views/Auth';
import { AboutView } from '../views/About';
import TermsPolicy from '../views/TermsPolicy';
import Profile from '../views/Profile';
import Settings from '../views/Settings';

/**
 * List of routes available only for authenticated users
 * Also renders the "Private Layout" composition
 */
const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path="/chilifood" element={<Home />} />
            <Route path="restaurants/:restaurant/:plan" element={<Plan />} />
            <Route path="/" element={<Home />} />
            <Route path="restaurants/:restaurant" element={<Restaurant />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="auth/*" element={<AuthRoutes />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/terms-policy" element={<TermsPolicy />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
};

export default PrivateRoutes;
