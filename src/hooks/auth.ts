import { useCallback } from 'react';

/**
 * Hook to detect is current user authenticated or not
 * @returns {boolean} true if user is authenticated, false otherwise
 */

export interface IUser {
    phoneNumber?: string;
    password?: string;
    block?: string;
    name?: string;
    street?: string;
    avenue?: string;
    house?: string;
    city?: { label: string; year: number } | null;
}
export function useIsAuthenticated() {
    const user: IUser = JSON.parse(localStorage.getItem('user') || '{}');
    const isAuthenticated = user?.phoneNumber ? true : false;
    let result = {
        isAuthenticated,
        ...user,
    };

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
