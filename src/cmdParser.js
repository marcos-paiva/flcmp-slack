const getPhrases = require('./getPhrases')

const cmdParser = (userCommand) => {
    if (userCommand.text === 'rand') {

        getPhrases.get().then(function(response){
            const responseObj = {
                response_type: userCommand.channel_id,
                text: response.data
            }
            return responseObj;
        }).catch(function (error) {
            console.log(error);
        })

    } else {

        console.log('Command not found');
        return "Command unknown";

    }
}

module.exports = cmdParser;