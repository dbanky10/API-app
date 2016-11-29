var OAuth = require('oauth')
 `npm install oauth` to satisfy
website: https://github.com/ciaranj/node-oauth
var KEY = "<INSERT KEY HERE>"
var SECRET = "<INSERT SECRET HERE>"

var oauth = new OAuth.OAuth(
	'http://api.thenounproject.com',
	'http://api.thenounproject.com',
	KEY,
	SECRET,
	'1.0A',
	null,
	'HMAC-SHA1',
	undefined,
	{"Accept": "application/json"}
)
oauth.get(
	'http://api.thenounproject.com/icon/6324/',
	KEY,
	SECRET,
	function (e, data, res){
		if (e) console.error(e)
		console.log(require('util').inspect(data))
	}