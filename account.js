var EventEmitter = require('events').EventEmitter
var util = require('util')

module.exports = function () {
  function Account () {
    this.orders = []
  }

  var account = new Account()
  return account
}
