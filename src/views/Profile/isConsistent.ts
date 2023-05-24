export const isConsistent = (key: string, value: any, state: any) => {
    if (key === 'city' && !state.name) {
        return {
            key,
            message: ['Please enter name before selecting city'],
        };
    }
    return null;
};
