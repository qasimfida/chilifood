import { useCallback } from 'react';
// import { useAppStore } from '../store';

/**
 * Hook to detect is current user authenticated or not
 * @returns {boolean} true if user is authenticated, false otherwise
 */
export function useIsAuthenticated() {
    // const [state] = useAppStore();
    const user: { userNumber?: string; password?: string } = JSON.parse(localStorage.getItem('user') || '{}');
    const isAuthenticated = user?.userNumber === '12345678' ? true : false;
    let result = {
        isAuthenticated,
        ...user,
    };

    // TODO: AUTH: add access token verification or other authentication check here
    // result = Boolean(sessionStorageGet('access_token', ''));

    return result;
}

/**
 * Returns event handler to Logout current user
 * @returns {function} calling this event logs out current user
 */

const onLogout = () => {
    localStorage.removeItem('user');
};
export function useEventLogout() {
    // const [, dispatch] = useAppStore();

    return useCallback(() => {
        onLogout();
        // TODO: AUTH: add auth and tokens cleanup here
        // sessionStorageDelete('access_token');
    }, []);
}
