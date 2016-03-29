var seneca = require('seneca')()
var client = seneca.client()

client.act({ role:'user', cmd:'login' }, function (err, result) {
  console.log(result.loggedIn)
})