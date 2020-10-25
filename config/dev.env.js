'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const PASSWORD = process.env.PASSWORD
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  PASSWORD: `"${PASSWORD || 'test'}"`
})
