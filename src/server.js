const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const config = require('./config/backend');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const port = 3001;
const logFile = 'log.txt';

app.post('/sendEmail', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: config.service,
        port:    config.port,
        secure:  true,
        auth:    {
            type:         config.type,
            user:         config.user,
            clientId:     config.clientId,
            clientSecret: config.clientSecret,
            refreshToken: config.refreshToken,
            accessToken:  config.accessToken
        }
    });

    const message = `<span style="font-family: Spinnaker sans-serif; font-size: 16px">
                     <strong>Sender: <em>${req.body.name} ${req.body.email}</em></strong><br />
                     <strong>Message:</strong><br /> 
                     ${req.body.message}</span>`;

    transporter.sendMail({
        from:    config.user,
        to:      config.user,
        subject: req.body.subject,
        html:    message
    }, (error, info) => {
        if (error) {
            fs.appendFile(logFile, `${error} \r\n`, (err) => {
                if (err) {
                    throw err;
                }
            });
            res.status(500).send(error);
        } else {
            transporter.close();
            res.status(200).send(info);
            fs.appendFile(logFile, `success!\r\n ${message} \r\n`, (err) => {
                if (err) {
                    throw err;
                }
            });
        }
    });

});

app.listen(port, (error) => {
    if (error) {
        fs.appendFile(logFile, `${error} \r\n`, (err) => {
            if (err) {
                throw err;
            }
        });
    } else {
        fs.appendFile(logFile, `Server listen to port ${port} \r\n`, (err) => {
            if (err) {
                throw err;
            }
        });
    }
});
