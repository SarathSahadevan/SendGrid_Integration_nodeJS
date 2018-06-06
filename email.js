var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var temp = require('./temp');
var TO = require('./emailRecipient')
var options = {
    auth: {
        api_key: process.env.SENDGRID_KEY
    }
}

var options = {
    auth: {
        api_user: '',
        api_key: ''

        // api_user: process.env.SENDGRID_USERNAME
        //api_key: process.env.SENDGRID_PASSWORD

    }
}

var mailer = nodemailer.createTransport(sgTransport(options));


console.log("Success");
var email = {
    to: [TO],
    from: '',
    subject: 'Notification E-Mail',
    html: temp

};
var methods = {
    Email: function () {
        mailer.sendMail(email, function (err, res) {
            if (err) {
                console.log(err)
            }
            console.log(res);
        })
    }
}


exports.data = methods;