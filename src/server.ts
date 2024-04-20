import inputValues from './responseMessages';

/**
 * @param {String} fieldValue
 */
export const returnResponse = function (fieldValue: String) {
    if (fieldValue.length >= 0) {
        for (let i = 0; i < inputValues.length; i++) {
            const inputObj = inputValues[i];
            if (fieldValue === inputObj.value) {
                return {
                    responseMessage: inputObj.responseMessage,
                    disabled: inputObj.disabled,
                };
            }
        }
    }
    return {
        responseMessage: 'error',
        disabled: true
    }
};