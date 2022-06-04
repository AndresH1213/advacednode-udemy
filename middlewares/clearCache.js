const { clearHash } = require('../services/cache');

module.exports = async (req, res, next) => {
    // this will allow the route handler execute first
    await next();

    clearHash(req.user.id);
}