import { Route, Routes } from 'react-router-dom';
import AuthRoutes from '../views/Auth';
import PersonalDetails from '../views/PersonalDetails';

/**
 * List of routes available only for anonymous users
 */
const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="auth/*" element={<AuthRoutes />} />
            <Route path="/personal-details" element={<PersonalDetails />} />
        </Routes>
    );
};

export default PublicRoutes;
