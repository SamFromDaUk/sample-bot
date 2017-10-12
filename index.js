const readLine = require('readline-sync');
const responses = require('./responses');

const getResponse = (area) => {
    return `> ${responses[area][Math.floor(Math.random() * responses[area].length)]}\n`;
};

const sendResponse = (reply, first) => {
    handleReply(reply, first);
};

const handleReply = (reply, first) => {
    let response = null;

    setTimeout(() => {
        if (!first && reply.match(/hello|hi|hey/i)) {
            return sendResponse(
                readLine.question(getResponse('hello'))
            );
        }

        if (reply.match(/\?/)) {
            return sendResponse(
                readLine.question(getResponse('answer'))
            );
        }

        if (reply.match(/[^A-Za-z0-9]/)) {
            return sendResponse(
                readLine.question(getResponse('hackerAlert'))
            );
        }

        sendResponse(
            readLine.question(getResponse('notSure'))
        );
    }, Math.random() * 1000);
};

sendResponse(
    readLine.question(getResponse('initial')),
    true
);
