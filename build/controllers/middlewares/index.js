"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn)
        return next();
    res.status(403);
    res.send('Not permitted');
}
exports.requireAuth = requireAuth;
function bodyValidator(keys) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).send();
            return;
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!req.body[key]) {
                res.status(422).send("Missing property " + key);
                return;
            }
        }
        next();
    };
}
exports.bodyValidator = bodyValidator;
