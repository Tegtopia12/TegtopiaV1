let handler = async m => m.reply(`
            .✵.𝗚𝗥𝗨𝗣 JB|TEGUH.✵.

            https://chat.whatsapp.com/EaiVhSl6S8ZBb6S0wC2s5x
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
