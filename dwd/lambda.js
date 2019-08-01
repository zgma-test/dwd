let AWS = require('aws-sdk');
const s3 = new AWS.S3();
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {

    sns.publish({
        Message: 'hello',
        MessageAttributes: {},
        MessageStructure: 'String',
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:TestSNS'
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
        });



    callback(null, { "message": "Successfully executed" });
}