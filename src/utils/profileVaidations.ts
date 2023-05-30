export const profileValidation = (t: any) => ({
    name: {
        type: 'string',
        presence: { allowEmpty: false, message: t('ISREQUIRED') },
        format: {
            pattern: /^[a-zA-Z\u0600-\u06FF\s]*$/, // Note: Allow only alphabets
            message: 'INVALID_NAME',
        },
        length: {
            minimum: 1,
            maximum: 30,
            message: t('ERROR.PREFIX') + ' 30 ' + t('ERROR.DIGITS'),
        },
    },
    street: {
        type: 'string',
        presence: { allowEmpty: false, message: t('ISREQUIRED') },
        length: {
            minimum: 1,
            maximum: 30,
            message: t('ERROR.PREFIX') + ' 30 ' + t('ERROR.DIGITS'),
        },
    },
    avenue: {
        presence: { allowEmpty: true, message: t('ISREQUIRED') },
        type: 'string',
        length: {
            maximum: 30,
            message: t('ERROR.PREFIX') + ' 30 ' + t('ERROR.DIGITS'),
        },
    },
    block: {
        presence: { allowEmpty: false, message: t('ISREQUIRED') },
        type: 'string',
        length: {
            minimum: 1,
            maximum: 4,
            message: t('ERROR.PREFIX') + ' 4 ' + t('ERROR.DIGITS'),
        },
    },
    house: {
        presence: { allowEmpty: false, message: t('ISREQUIRED') },
        type: 'string',
        length: {
            minimum: 1,
            maximum: 5,
            message: t('ERROR.PREFIX') + ' 5 ' + t('ERROR.DIGITS'),
        },
    },
    city: {
        presence: {
            allowEmpty: false,
            message: t('PERSONAL_DETAILS.PLEASE_SELECT_CITY'),
        },
    },
});
