const { Telegraf } = require('telegraf');

const api_key = ''; //Api do bot
const chat_id = ''; //Id do grupo
const LINK_SITE = 'https://goldbet.games/cadastro?refId=Mjc1N3JlZklk';
const bot = new Telegraf(api_key);


async function startBot() {
    let iterationCount = 0;

    setInterval(async () => {
        iterationCount++;

        const now = new Date();
        const tz = 'America/Sao_Paulo';
        const timeNow = new Date(now.toLocaleString('en-US', { timeZone: tz }));

        let h = timeNow.getHours();
        let m = timeNow.getMinutes();
        let s = timeNow.getSeconds();

        if (m > 59) {
            h += 1;
            m = 0;
        }
        if (h === 9) {
            m = `0${h}`;
        }
        if (m < 9) {
            m = `0${m}`;
        }
        if (s < 9) {
            s = `0${s}`;
        }
        console.log(`${h}:${m}:${s}`);

        const numero_aleatorio1 = Math.floor(Math.random() * 10) + 1;
        const numero_aleatorio2 = Math.floor(Math.random() * 10) + 1;

        console.log(numero_aleatorio1, numero_aleatorio2);

     await bot.telegram.sendPhoto(
        chat_id,
        { source: 'tigrinho.jpg' },
        {
            caption: `
🐯 *Sinais do Mestre - Oportunidade Imperdível!* 🚀

🎲 *FORTUNE TIGER - Nova Oportunidade!*
- ⏰ *Tolerância:* 3 minutos
- 🎯 *Gire:* ${numero_aleatorio2}X no *TURBO* e recarregue o jogo
- 🔄 Depois, gire ${numero_aleatorio1}X *MANUAL*
- 🟢 *Saia no Primeiro Grande Ganho!*

🌐 *Plataforma dos Sinais:* [Clique Aqui](${LINK_SITE})
🔗 *Sinais funcionam apenas na plataforma acima* 

📢 *Não perca essa chance! Chame seus amigos e jogue agora!*

🤑 *Boa sorte e que venham os ganhos!* 🤑
            `,
            parse_mode: 'Markdown',
            disable_web_page_preview: true
        }
    );

    }, 60000);

    setTimeout(async () => {
        await bot.telegram.sendMessage(
            chat_id,
            `🎯 *Boas notícias!* 🌟\n\nA *CARTA LIBERADA* \n\n *GREEN*! 🟢💰`,
            {
                parse_mode: 'Markdown',
                disable_web_page_preview: true
            }
        );
    }, 240000);
}

startBot();
