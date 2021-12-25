const TelegramApi = require('node-telegram-bot-api')


const token = '5084985604:AAEkqJS5sG7mwZVCkv4C0sgO5xM04wwmePM'

const bot = new TelegramApi (token, {polling: true})

bot.on('message', (msg) => { const chatId = msg.chat.id; bot.sendMessage(chatId, 'Приветствую, Товарищ!'); });

bot.on("message", (msg) => {

    const chatId = msg.chat.id;
    
    bot.sendPhoto(chatId, 'scale_1200.jpeg');
    
    });

    const keyboard = [
        [
        {
        text: 'Хочу милоты', 
        callback_data: '1'
        }
        ],
        [
        { text: 'Хочу правила по русскому языку',
        callback_data: '2'
        }
        ],
        [
        { text: 'Хочу табличку производных',
        callback_data: '3'
        }
        ]
        ];
    
        bot.on('message', (msg) => {
            const chatId = msg.chat.id; 

            bot.sendMessage(chatId, 'Выбираем', { 
                  reply_markup: {
                      inline_keyboard: keyboard
                  }
              });
          });
          
       
          bot.on('callback_query', (query) => {
              const chatId = query.message.chat.id;
          
              let img = '';
          
              if (query.data === '1') { 
                  img = 'scale_1201.jpeg';
              }
          
              if (query.data === '2') { 
                  img = '558229279.jpg';
              }
              if (query.data === '3') { 
                img = 'img1.jpg';
              }

              if (img) {
                  bot.sendPhoto(chatId, img, { 
                      reply_markup: {
                          inline_keyboard: keyboard
                      }
                  });
              } else {
                  bot.sendMessage(chatId, 'Непонятно, давай заново?', { 
                      reply_markup: {
                          inline_keyboard: keyboard
                        }
                    });
                }
              });