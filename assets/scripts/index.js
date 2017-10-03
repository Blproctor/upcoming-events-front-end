'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  $('#signup-account').on('submit', authEvents.signUp)
  $('#signin-account').on('submit', authEvents.signIn)
  $('#change-password').on('submit', authEvents.changePassword)
  $('#signout-account').on('submit', authEvents.signOut)
})
