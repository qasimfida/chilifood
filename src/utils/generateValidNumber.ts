export const generateValidNumber = (value: string) => {
    const input = value.replace(/\D/g, ''); // Remove non-numeric characters
    return input.slice(0, 8);
};
