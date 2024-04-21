import express from 'express';

const app = express();
app.get("/getResponse", (request, response) => {
    response.send({
        'test': 'test',
        'status': 'ok'
    })
});
app.listen(5123);
