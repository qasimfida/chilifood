import { Route, Routes } from 'react-router-dom';
import AuthRoutes from '../views/Auth';
// import { NotFoundView } from '../views';
// import LoginEmailView from '../views/Auth/Login/LoginEmailView';
import AboutView from '../views/About';
import Plan from '../views/Plan';
import Home from '../views/Home';
import Restaurant from '../views/Restaurant';
import TermsPolicy from '../views/TermsPolicy';
import PersonalDetails from '../views/Profile';
import CheckOut from '../views/Checkout';
import Settings from '../views/Settings';

/**
 * List of routes available only for anonymous users
 */
const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/chilifood" element={<Home />} />
            <Route path="/:restaurant/:plan" element={<Plan />} />
            <Route path="/" element={<Home />} />
            <Route path="/:restaurant" element={<Restaurant />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="auth/*" element={<AuthRoutes />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/terms-policy" element={<TermsPolicy />} />
            <Route path="/profile" element={<PersonalDetails />} />
            <Route path="/:restaurant/:plan" element={<Plan allowSelect />} />
        </Routes>
    );
};

export default PublicRoutes;
