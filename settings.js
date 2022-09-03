//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['0701651987']
global.premium = ['0701651987']
global.ownernomer = '0701651987'
global.ownername = '*𝙰𝙼𝙰𝚂𝙷𝙰 𝙸𝙽𝙳𝚄𝙽𝙸𝙻 🐼❤️*'
global.botname = '𝖦Λ𝖱𝖥𝖨Ξ𝖫𝖣 𝖡𝖮T'
global.footer = '*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈  𝙰𝙼𝙰𝚂𝙷𝙰 𝙸𝙽𝙳𝚄𝙽𝙸𝙻 🐼❤️*'
global.ig = 'https://chat.whatsapp.com/KwhBPTk1yvWLrpmGcgdA2h'
global.region = 'India, South India, Kerala'
global.sc = 'https://chat.whatsapp.com/KwhBPTk1yvWLrpmGcgdA2h'
global.myweb = 'https://chat.whatsapp.com/KwhBPTk1yvWLrpmGcgdA2h'
global.packname = '𝖦Λ𝖱𝖥𝖨Ξ𝖫𝖣 𝖡𝖮T'
global.author = '*𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈  𝙰𝙼𝙰𝚂𝙷𝙰 𝙸𝙽𝙳𝚄𝙽𝙸𝙻 🐼❤️*'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '*🧜🏻‍♂️💬 𝙳𝚘𝚗𝚎 🧙🏻‍♂️*',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: '◁━━━━━━◈✙◈━━━━━━▷

*🧜🏻‍♂️💬 Wait A minute... 🧙🏻‍♂️*

◁━━━━━━◈✙◈━━━━━━▷',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://i.ibb.co/WzSFtDJ/Picsart-22-08-30-19-08-44-087.jpgfontsize=100&text='
global.fluming = 'https://i.ibb.co/WzSFtDJ/Picsart-22-08-30-19-08-44-087.jpg&text='
global.flarun = 'https://i.ibb.co/WzSFtDJ/Picsart-22-08-30-19-08-44-087.jpg&text='
global.flasmurf = 'https://i.ibb.co/WzSFtDJ/Picsart-22-08-30-19-08-44-087.jpg&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
