const request = require('request')
const MAIN_URI = require('./').MAIN_URI

exports.Character = async (name) => {
	return new Promise((resolve, reject) => {
		request.get(`${MAIN_URI}/characters/${name}.json`, (err, res, body) => {
			if (err || res.statusCode !== 200) reject(err)
			resolve(JSON.parse(body))
		})
	})
}
