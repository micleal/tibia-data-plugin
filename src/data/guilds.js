const request = require('request')
const MAIN_URL = require('./')

exports.Guild = async (name) => {
	return new Promise((resolve, reject) => {
    request.get(`${MAIN_URL}/guilds/${name}.json`, (err, res, body) => {
      if (err || response.statusCode !== 200) reject(err)
      resolve(JSON.parse(body))
    })
  })
}
