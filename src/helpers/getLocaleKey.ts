import { i18n } from 'i18next';

export const getLocaleKey = (key: string, i18n: i18n) => {
    const lng = i18n.language === 'ar' ? i18n.language.charAt(0).toUpperCase() + i18n.language.slice(1) : '';
    return `${key}${lng}`;
};
