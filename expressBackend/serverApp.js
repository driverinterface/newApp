const express = require('express');
const bodyParser = require('body-parser');
const predefinedInputData = require('./allowedInputData.js');

const app = express();
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.post("/receiveUser", urlEncodedParser, jsonParser, (request, response) => {
    let requestBody = request.body;

    if (requestBody.value !== null && typeof requestBody !== 'undefined') {
        if (requestBody.value === predefinedInputData.inputValues.inputOne.value) {
            response.send({
                'responseMessage': predefinedInputData.inputValues.inputOne.responseMessage,
                'responseStatus': predefinedInputData.inputValues.inputOne.responseStatus,
                'disabled': predefinedInputData.inputValues.inputOne.disabled
            });
        } else if (requestBody.value === predefinedInputData.inputValues.inputTwo.value) {
            response.send({
                'responseMessage': predefinedInputData.inputValues.inputTwo.responseMessage,
                'responseStatus': predefinedInputData.inputValues.inputTwo.responseStatus,
                'disabled': predefinedInputData.inputValues.inputTwo.disabled
            });
        } else if (requestBody.value === predefinedInputData.inputValues.inputThree.value) {
            response.send({
                'responseMessage': predefinedInputData.inputValues.inputThree.responseMessage,
                'responseStatus': predefinedInputData.inputValues.inputThree.responseStatus,
                'disabled': predefinedInputData.inputValues.inputThree.disabled
            });
        }
    } else {
        response.send({
            'error': true,
            'status': response.status(500),
            'responseMessage': 'Cannot respond for empty request body'
        });
        response.sendStatus(500);
    }

    response.statusCode = 500;
    response.statusMessage = 'Internal Server Error';
    response.send({
        'responseMessage': 'Internal Server Error',
        'responseStatus': 500,
        'disabled': true
    });
    
    console.log(requestBody);
});
app.listen(3000);
