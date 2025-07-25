
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA61U246jOBT8F78mmuYaIFJLYwgE0gmBkGuv9sEBcw8QY0KTUf59RdK9M9qdne2VlidjW8dVdarON1CUSY1fcAfG30BFkguiuF/SrsJgDNQmDDEBQxAgisAY+LZnoirQ+TZL4yfhxRsMzla0RftZe7G2Zhjs4WgliS/yNHsGtyGommOe+L8ouD0a3VshvLUpE1eukyNCRM6LTuL+jZ3LszIMVwdby2htCM/g1ldECUmKSK9ifMIE5S+4c1BCPgdfXix3nrZIpGwwvWqb1FZVkxiCpgh7iZubr8cRMja+UmY7+Dn4znQEW++qUOQ0Z0k26DKtz5m/nK4Kf1NWPsvVSewy18hrH/DrJCpwYAW4oAntPq071PwkXLyxblhcCz3Xn1q8Tou8tYXlXN0znbfxN6pEYKAvPgecl/3cXipnlNDd0niirsMWrRWsZu1WCrgqKDFGm6faPpv6j8Ad8uGV7L/orukzbra2N+L6uiyy9uw64nS5UrwZVufOK3NBmdcxEPlwc/gc/JfB1efdfHc91TCV0SVl8VwZzIpTldpN8LokklRfkdLaXvYdPqIN+RXKNr9cjcledOOjvYnOczvLnujaKxmSH5iryrqusENZBulpLhwm6WpBeOGVTPauLB5Eaz5VeH3Kn+2576h2lktGoKs2bJ/vjDLcWQEYs7chIDhKakoQTcriviewQ4CCi4d9guldXnAUm7DlR+vwqk/208ubkpSE9Q4Fx6/gUroc2nO1CA8Kay3kZzAEFSl9XNc4MJOalqRb4LpGEa7B+Ld7p3rSBJ9KimdJAMaA40YjUZA5hlO+1l/aGNEaVdWXAlMwBCEpTwsMxpQ0eAju9xlV1AVD50aGIDGGyEhQncjihBU1llN0DvYMT48318kJ1xSdKjBmJZEXBIkdMbfh/wKD1zU4YiUBsqzMsxzPSipjCIzBMxLL8Ar/LzD42+9DUOA3+nBxrz3PDkGYkJpuiqbKSxR8WPzjEPl+2RTU6wpf6xeYgPEP25jSpIjqnlhTIOLHyQVrPQ8wDlFe4z/bjQkOPri8jzCtDHoXmrNXxtBeGdBj7wv9VZox93dx8vslReFFRVYYWeZGLD/mvvbbQ1CgvhCAzTEpeknewfa1A0xRktd9JGdPx6wpDX1J2NR3p1OoR1CLIPhO7iMyD0tWtlZjJ1Z43OQZtzWmE1usp4tK2R4ZK+0mdCLEG2rFsdo+/6QIGAOXcgba1065GL1NPH6ZNzbEZ363enLEebCc76xw5pZcuJ1m/IDaFezW1qlAFeunuaLvGWlrLmxnkvsxGW3gelIsNKzC5/61AF8SH//4WNidTZuUI66pTF6FrZtVszxVznxgdMIxRDSYCFVHdyvei49ww3fRAVadfQyo2SwrR6gO7nlyzDI4MDVjfnZZ9mBq8BHm+zDJ34d48h6z5P4bJvg+E9978C9tfMDuvcbchj9UeJ+x/zCnVLR2iZkKYcCT6tXOV6voio9q+hJud4pmyZHkDqzt3LMOrg9uvemrHNGwJCcwBqgISHm3CSmb3rxWEZa/Gt2QsfTowTtHNYXfA/GTjIni45ZDyspEddxL4LCHOOzd3cGq8iiiH/kCsP/MNAK3PwCVew1eiAgAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "22665482029", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💚", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "237677224245", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
