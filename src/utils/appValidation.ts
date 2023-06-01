export const appValidation = (t: any) => {
    return {
        profile: {
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
        },
        recoverPassword: {
            password: {
                type: 'string',
                presence: true,
                length: {
                    minimum: 3,
                    maximum: 50,
                    message: 'password must be more than 3 digits',
                },
            },
        },
        forgetPassword: {
            phoneNumber: {
                presence: true,
                type: 'string',
                format: {
                    pattern: '[0-9]*', // Note: We have to allow empty in the pattern
                    message: 'should contain numbers',
                },
                length: {
                    minimum: 8,
                    maximum: 8,
                    message: t('PHONE_NUMBER_ERROR'),
                },
            },
        },
        signUp: {
            phoneNumber: {
                type: 'string',
                format: {
                    pattern: '[0-9]*', // Note: We have to allow empty in the pattern
                },
                length: {
                    minimum: 8,
                    maximum: 8,
                    message: 'field must be 8 numbers',
                },
            },
            password: {
                type: 'string',
                presence: true,
                length: {
                    minimum: 3,
                    maximum: 50,
                    message: 'password must be more than 3 digits',
                },
            },
        },
    };
};
