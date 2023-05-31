import { Route, Routes } from 'react-router-dom';
import Plan from '../views/Plan';
import CheckOut from '../views/Checkout';
import Settings from '../views/Settings';
import Profile from '../views/Profile';
/**
 * List of routes available only for register users
 */
const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/select/restaurants/:restaurant/:plan" element={<Plan allowSelect />} />
        </Routes>
    );
};

export default PrivateRoutes;
