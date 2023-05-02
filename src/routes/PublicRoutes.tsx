import { Route, Routes } from 'react-router-dom';
// import AuthRoutes from '../views/Auth';
// import { NotFoundView } from '../views';
// import LoginEmailView from '../views/Auth/Login/LoginEmailView';
// import AboutView from '../views/About';
import Plan from '../views/Plan';

/**
 * List of routes available only for anonymous users
 */
const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Plan />} />
            {/* <Route path="auth/*" element={<AuthRoutes />} />
            <Route path="about" element={<AboutView />} />,
            <Route path="*" element={<NotFoundView />} /> */}
            <Route path="/plan" element={<Plan />} />
        </Routes>
    );
};

export default PublicRoutes;
