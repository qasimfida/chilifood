import { Route, Routes } from 'react-router-dom';
import { NotFoundView } from '../..';
import Signup from './Signup';
import ConfirmOTP from './ConfirmOTP';
import Address from './Address';

/**
 * Routes for "Signup" flow
 * url: /auth/signup/*
 */
const SignupRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/confirm-otp" element={<ConfirmOTP />} />
            <Route path="/address" element={<Address />} />
            <Route path="*" element={<NotFoundView />} />
        </Routes>
    );
};

export default SignupRoutes;
