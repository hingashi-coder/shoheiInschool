'use strict'
const PASSWORD = process.env.PASSWORD

module.exports = {
  NODE_ENV: '"production"',
  PASSWORD: `"${PASSWORD || 'test'}"`
}
