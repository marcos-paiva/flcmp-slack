const getPhrases = require('./getPhrases')

async function loadPhrases() {
    const response = await getPhrases.get();
    return response.data;
}

const cmdParser = (userCommand) => {
    if (userCommand.text == 'rand') {
       loadPhrases();
    } else {
        return "Command unknown";
    }
}

module.exports = cmdParser;