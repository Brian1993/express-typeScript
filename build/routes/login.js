"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get('/login', function (req, res) {
    res.send("\n    <form method=\"POST\">\n      <label>Email</label>\n      <input nmae='email'/>\n      <label>Password</label>\n      <input nmae='password' type='password' />\n      <button>Submit</button>\n    </form>\n  ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    console.log(req.body);
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
exports.default = router;
