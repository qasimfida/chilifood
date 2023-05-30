import { Route, Routes } from 'react-router-dom';
import { NotFoundView } from '../..';
import Signup from './Signup';
import ConfirmOTP from './ConfirmOTP';

const SignupRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/confirm-otp" element={<ConfirmOTP />} />
            <Route path="*" element={<NotFoundView />} />
        </Routes>
    );
};

export default SignupRoutes;
