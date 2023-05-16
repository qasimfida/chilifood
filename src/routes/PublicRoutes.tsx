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
            <Route path="auth/*" element={<AuthRoutes />} />
            {/* <Route path="auth/*" element={<AuthRoutes />} /> */}
            <Route path="/about" element={<AboutView />} />,{/* <Route path="*" element={<NotFoundView />} /> */}
            <Route path="/plan" element={<Plan />} />
            <Route path="/terms-policy" element={<TermsPolicy />} />
            <Route path="/profile" element={<PersonalDetails />} />
        </Routes>
    );
};

export default PublicRoutes;
