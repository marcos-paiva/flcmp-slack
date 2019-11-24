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

bot.on('error', (error) => {
    console.log(error)
});

bot.on('message', (data) => {
    if(data.type !== 'message') {
        return;
    }
    handleMessage(data.text);
})

function handleMessage(message) {
    if (message.includes(' go')) {
        randomJoke();
    } else {
        getHelp();
    }
}

const api = axios.create({
    baseURL: 'http://localhost:3001/api/phrases'
});

async function randomJoke() {
    try {
        const res = await api.get();
        bot.postMessageToChannel('integração', res.data);
        console.info(res.data);
    } catch (error) {
        console.error(error);
    }
}

function getHelp() {

}

