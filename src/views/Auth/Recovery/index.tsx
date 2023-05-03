import { Route, Routes } from 'react-router-dom';
import { NotFoundView } from '../..';
import RecoveryPassword from './RecoveryPassword';
import ForgetPassword from './ForgetPassword';

/**
 * Routes for "Recovery" flow
 * url: /auth/recovery/*
 */
const RecoveryRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ForgetPassword />} />
            <Route path="password" element={<ForgetPassword />} />
            <Route path="change" element={<RecoveryPassword />} />
            <Route path="*" element={<NotFoundView />} />
        </Routes>
    );
};

export default RecoveryRoutes;
