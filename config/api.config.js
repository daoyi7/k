const isPro = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
  baseURL: isPro ? 'http://api.codingwell.xyz/api/' :'http://api.codingwell.xyz/api/'
}
