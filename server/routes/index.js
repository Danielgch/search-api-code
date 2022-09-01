const searchApiRoute = require('./search.route')

/**
 * Routes endopoints
 * @param {*} app 
 */

module.exports = (app) => {
  app.use('/api/search', searchApiRoute)
}