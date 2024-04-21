import express from 'express';
import bodyParser from 'body-parser';

import { inputValuesTextOne, inputValuesTextTwo, inputValuesTextThree } from './allowedInputData';

const app = express();
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.post("/receiveUser", urlEncodedParser, jsonParser, (request, response) => {
    let requestBody: any = request.body;

    if (requestBody.value !== null && typeof requestBody !== 'undefined') {
        if (requestBody.value === inputValuesTextOne.value) {
            response.send({
                'responseMessage': inputValuesTextOne.responseMessage,
                'responseStatus': inputValuesTextOne.responseStatus,
                'disabled': inputValuesTextOne.disabled
            });
        } else if (requestBody.value === inputValuesTextTwo.value) {
            response.send({
                'responseMessage': inputValuesTextTwo.responseMessage,
                'responseStatus': inputValuesTextTwo.responseStatus,
                'disabled': inputValuesTextTwo.disabled
            });
        } else if (requestBody.value === inputValuesTextThree.value) {
            response.send({
                'responseMessage': inputValuesTextThree.responseMessage,
                'responseStatus': inputValuesTextThree.responseStatus,
                'disabled': inputValuesTextThree.disabled
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
