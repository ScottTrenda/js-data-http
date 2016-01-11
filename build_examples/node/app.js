var JSData = require('js-data')
// normally this would be "var DSHttpAdapter = require('js-data-http-node')"
var DSHttpAdapter = require('../../')

var adapter = new DSHttpAdapter()
var Base = JSData.Model.extend({}, { name: 'Base' })
Base.registerAdapter('http', adapter, { default: true })
var User = Base.extend({}, { name: 'User' })

User.find(1).catch(function (err) {
  console.log(err)
})