const inputValuesTextOne = {
    value: 'Text',
    responseMessage: 'Bad Request',
    disabled: true,
    responseStatus: 400
};
const inputValuesTextTwo = {
    value: 'Form',
    responseMessage: 'Data is invalid',
    disabled: true,
    responseStatus: 404
};
const inputValuesTextThree = {
    value: 'TestForm',
    responseMessage: 'Welcome back to the portal',
    disabled: false,
    responseStatus: 200
}

module.exports.inputValues = {
    inputOne: inputValuesTextOne,
    inputTwo: inputValuesTextTwo,
    inputThree: inputValuesTextThree
}