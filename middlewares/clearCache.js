const { cleanHash } = require('../services/cache');

module.exports = async (req, res, next) => {
    // this will allow the route handler execute first
    await next();

    cleanHash(req.user.id);
}