import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['16145174095', 'FG98', true],
  ['17745198093'], 
  ['17744205538'] 
] //Numeros de owner 

global.mods = ['573125484672'] 
global.prems = ['50489079501', '5219631769130', '573125484672']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.spiderx.com.br/app?welcome=1'; 'Etcer5ZQysQADqSUJYZ9'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api.fgmods.xyz': 'dtmwuoXV' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'DyLux┃ᴮᴼᵀ' 
global.author = '@fg98' 
global.fgig = '▢ Sígueme en Instagram\nhttps://www.instagram.com/fg98_ff\n' 
global.dygp = 'https://chat.whatsapp.com/BESBo5xjvIZE4YVvth6Yzr'
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://youtube.com/fg98f'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '*⌛ _Cargando..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
