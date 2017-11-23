const isPro = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
  baseURL: isPro ? 'http://47.96.30.198//api/' :'api/'
}
