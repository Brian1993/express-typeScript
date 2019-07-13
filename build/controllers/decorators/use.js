"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var config_1 = require("./config");
exports.use = function (middleware) {
    return function (target, key, desc) {
        var middlewares = Reflect.getMetadata(config_1.MetadataKeys.middleware, target, key) || [];
        Reflect.defineMetadata(config_1.MetadataKeys.middleware, middlewares.concat([middleware]), target, key);
    };
};
