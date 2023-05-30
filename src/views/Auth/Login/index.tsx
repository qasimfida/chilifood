import { Route, Routes } from 'react-router-dom';
import { NotFoundView } from '../..';
import Login from './Login';

const LoginRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFoundView />} />
        </Routes>
    );
};

export default LoginRoutes;
