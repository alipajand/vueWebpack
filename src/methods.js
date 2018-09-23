/**
 * JWT Token
 */
const resetToken = () => {
    window.localStorage.setItem('jwtToken', '');
    window.axios.defaults.headers.common['Authorization'] = null;
};
const setGlobalToken = (token) => {
    localStorage.setItem('jwtToken', token);
    window.axios.defaults.headers.common['Authorization'] = token;
};
const getCurrentToken = () => {
    return localStorage.getItem('jwtToken');
};

/**
 * convert to persian date
 * @param input
 * @param type
 * @returns {string}
 */
const persianDate = (input, type) => {
    if (!input) {
        return input;
    }
    const date = new Date(input);
    const calendarType = 'fa-persian';

    const weekday = (opt) => {
        const options = { weekday: opt };
        return date.toLocaleDateString(calendarType, options);
    };
    const month = (opt) => {
        const options = { month: opt };
        return date.toLocaleDateString(calendarType, options);
    };
    const year = (opt) => {
        const options = { year: opt };
        return date.toLocaleDateString(calendarType, options);
    };
    const day = (opt) => {
        const options = { day: opt };
        return date.toLocaleDateString(calendarType, options);
    };
    const hour = () => {
        const options = { hour: '2-digit' };
        const output = date.toLocaleString(calendarType, options);
        if (output.length <= 1) {
            return '0' + output;
        }
        return output;
    };
    const minute = () => {
        const options = { minute: '2-digit' };
        const output = date.toLocaleString(calendarType, options);
        if (output.length <= 1) {
            return '0' + output;
        }
        return output;
    };

    if (type === 'time') {
        return `${hour()}:${minute()}`;
    }

    if (type === 'date') {
        return `${weekday('long')} ${day('2-digit')} ${month('long')}`;
    }

    if (type === 'combo') {
        return `${weekday('long')} ${day('2-digit')} ${month('long')} ${hour()}:${minute()}`;
    }

    if (type === 'slash-combo') {
        return `${year('2-digit')}/${month('2-digit')}/${day('2-digit')} - ${hour()}:${minute()}`;
    }

    if (type === 'slash') {
        return `${year('2-digit')}/${month('2-digit')}/${day('2-digit')}`;
    }

    return `${weekday('long')}، ${day('2-digit')} ${month('long')}‌ ${year('numeric')}`;
};

/**
 *
 * @param inputData
 * @returns {*}
 */
const convertToEnglishDigit = (inputData) => {
    if (!inputData || inputData === '') {
        return null;
    }
    if (typeof inputData === 'number') {
        return inputData;
    }
    return inputData.replace(/[\u0660-\u0669]/g, (c) => {
        return c.charCodeAt(0) - 0x0660;
    }).replace(/[\u06f0-\u06f9]/g, (c) => {
        return c.charCodeAt(0) - 0x06f0;
    });
};

/**
 * export methods
 */
export default {
    resetToken,
    setGlobalToken,
    getCurrentToken,
    persianDate,
    convertToEnglishDigit
};
