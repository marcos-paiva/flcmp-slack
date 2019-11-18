const SlackBot = require('slackbots');
const axios = require('axios');
const dotEnv = require('dotenv').config();



const bot = new SlackBot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'falacampeao'
});

bot.on('start', () => {
    const params = {
        icon_emoji: ':robot_face:'
    }

    bot.postMessageToChannel(
        'integração',
        '',
        params
    );
})