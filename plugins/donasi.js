let handler = async m => m.reply(`
            .✵.𝗚𝗥𝗨𝗣 JB|TEGUH.✵.

            https://chat.whatsapp.com/H1DTdAv9Mxk61i3GW9yVhz
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
